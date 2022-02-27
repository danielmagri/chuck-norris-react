import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectChuck } from "../../core/context/reducers";
import { ErrorLabelStyle } from "./style";

export const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const chuck = useSelector(selectChuck(id ?? ""));

  return chuck === undefined ? (
    <ErrorLabelStyle>Erro</ErrorLabelStyle>
  ) : (
    <label>{chuck.value}</label>
  );
};
