import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Chuck } from "../../../domain/models";

type ChuckStore = {
  chucks: Chuck.Model[];
};

const initialState: ChuckStore = {
  chucks: [],
};

export const chuckSlice = createSlice({
  name: "chuck",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Chuck.Model>) => {
      state.chucks = [...state.chucks, action.payload];
    },
    clear: (state) => {
      state.chucks = [];
    },
  },
});

export const { add, clear } = chuckSlice.actions;

export const selectChucks = (state: any): Chuck.Model[] => state.chuck.chucks;
export const selectChuck =
  (id: String) =>
  (state: any): Chuck.Model | undefined =>
    (state.chuck.chucks as Chuck.Model[]).find((chuck) => chuck.id === id);
