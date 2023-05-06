import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";

const showsStateSelector = (state: State) => {
  return state.show;
};

export const showQuerySelctor = createSelector(
  showsStateSelector,
  (showsState) => showsState.query
);
export const showlistSelector = createSelector(
  showsStateSelector,
  (showsState) => Object.keys(showsState.show).map((id) => showsState.show[+id])
);
