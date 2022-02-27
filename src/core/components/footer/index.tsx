import { useDispatch } from "react-redux";
import { chuckSlice } from "../../context/reducers";
import { FooterStyle, ClearButton } from "./style";

export const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const clickHandler = (): void => {
    dispatch(chuckSlice.actions.clear());
  };

  return (
    <FooterStyle>
      <ClearButton onClick={clickHandler}>Clear</ClearButton>
    </FooterStyle>
  );
};
