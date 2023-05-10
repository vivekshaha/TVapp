import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";

const showsStateSelector = (state: State) => {
  return state.show;
};

export const QuerySelctor = createSelector(
  showsStateSelector,
  (showsState) => showsState.query
);
// export const showlistSelector = createSelector(
//   showsStateSelector,
//   (showsState) => Object.keys(showsState.show).map((id) => showsState.show[+id])
// );
export const show_querySelector = createSelector(
  showsStateSelector,
  (showsState) => showsState.show_query
);
export const ShowSelector = createSelector(
  showsStateSelector,
  (showsState) => showsState.show
);
export const showlistSelector = createSelector(
  ShowSelector,
  show_querySelector,
  QuerySelctor,
  (showsState, showquery, query) => {
    // console.log("slelscot:", query);
    const data = showquery[query]
      ? showquery[query].map((id) => showsState[+id])
      : [];
    // console.log("slectore", data);
    return data;
  }
);
export const showCastSelector = createSelector(
  showsStateSelector,
  (showsState) => Object.keys(showsState.cast).map((id) => showsState.cast[+id])
);

export const loadingSelector = createSelector(
  showsStateSelector,
  (showState) => showState.loading
);
