import React from "react";
import { Chuck } from "../../../domain/models";
import { ChuckCardStyle, ChuckCardLabel, ChuckCardImage } from "../style";

export type ChuckCardProps = {
  chuck: Chuck.Model,
  onClick: () => void,
};

export const ChuckCard: React.FC<ChuckCardProps> = ({ chuck, onClick }) => {
  return (
    <ChuckCardStyle onClick={() => onClick()}>
      <ChuckCardImage src={chuck.icon_url} />
      <ChuckCardLabel>{chuck.value}</ChuckCardLabel>
    </ChuckCardStyle>
  );
};
