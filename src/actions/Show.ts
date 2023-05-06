import { Show } from "../Models/show";

export const SHOW_LOADED = "show loaded";

export const showLoadedAction = (show: Show[]) => {
  return {
    type: SHOW_LOADED,
    payload: show,
  };
};

export const SET_QUERY = "setting query";

export const setqueryAction = (query: string) => ({
  type: SET_QUERY,
  payload: query,
});
