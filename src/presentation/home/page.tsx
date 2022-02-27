import React, { useState } from "react";
import { RandomChuck } from "../../domain/usecases";
import { ChuckCard } from "./components";
import { ChuckGridviewStyle, ButtonStyle, RootPageStyle } from "./style";
import { LoadingCard } from "../../core/components";
import { useNavigate } from "react-router-dom";
import { chuckSlice, selectChucks } from "../../core/context/reducers";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

type HomePageProps = {
  randomChuck: RandomChuck;
};

export const HomePage: React.FC<HomePageProps> = ({ randomChuck }) => {
  const navigate = useNavigate();
  const chucks = useSelector(selectChucks);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const getRandomChuck = (): void => {
    if (!loading) {
      setLoading(true);

      randomChuck
        .random()
        .then((data) => {
          dispatch(chuckSlice.actions.add(data));
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  };

  const clickHandler = (id: String): void => {
    navigate(`details/${id}`);
  };

  const onClickClear = (): void => {
    dispatch(chuckSlice.actions.clear());
  };

  return (
    <RootPageStyle>
      <Box
        sx={{
          marginTop: '20px',
          marginBottom: '32px',
        }}
      >
        <ButtonStyle onClick={getRandomChuck}>Random</ButtonStyle>
        <ButtonStyle onClick={onClickClear}>Clear</ButtonStyle>
      </Box>

      <ChuckGridviewStyle>
        {chucks?.map((chuck) => (
          <ChuckCard
            key={chuck.id}
            chuck={chuck}
            onClick={() => clickHandler(chuck.id)}
          />
        ))}
        {loading && <LoadingCard />}
      </ChuckGridviewStyle>
    </RootPageStyle>
  );
};
