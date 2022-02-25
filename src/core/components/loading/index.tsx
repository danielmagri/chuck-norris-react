import React from "react";
import { CircularProgress } from "@mui/material";
import { LoadingStyle } from "./style";

export const LoadingCard: React.FC = () => {
  return (
    <LoadingStyle>
      <CircularProgress color="secondary" thickness={5} size="3rem"/>
    </LoadingStyle>
  );
};
