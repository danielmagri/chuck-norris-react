import React, { useState, useEffect } from "react";
import { Chuck } from "../../domain/models";
import { RandomChuck } from "../../domain/usecases";
import { ChuckCard } from "./components";
import { ChuckGridviewStyle, RandomButton, RootPageStyle } from "./style";
import { LoadingCard } from "../../core/components";
import { useNavigate } from "react-router-dom";

type HomePageProps = {
  randomChuck: RandomChuck;
};

export const HomePage: React.FC<HomePageProps> = ({ randomChuck }) => {
  const navigate = useNavigate();

  const [chucks, setChucks] = useState<Chuck.Model[]>([]);
  const [loading, setLoading] = useState(false);

  const getRandomChuck = (): void => {
    if (!loading) {
      setLoading(true);

      randomChuck
        .random()
        .then((data) => {
          setChucks(chucks?.concat(data));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    document.title = `${chucks.length} jokes`;
  });

  const clickHandler = (): void => {
    navigate("details");
  };

  return (
    <RootPageStyle>
      <RandomButton onClick={getRandomChuck}>Random</RandomButton>
      <ChuckGridviewStyle>
        {chucks?.map((chuck) => (
          <ChuckCard key={chuck.id} chuck={chuck} onClick={clickHandler} />
        ))}
        {loading && <LoadingCard />}
      </ChuckGridviewStyle>
    </RootPageStyle>
  );
};
