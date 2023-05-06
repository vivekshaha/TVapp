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

export const SINGLE_SHOW_LOADED = "single show loaded";

export const singleShowLoadeAction = (show: Show) => ({
  type: SINGLE_SHOW_LOADED,
  payload: show,
});

export const SET_SHOW_ID = "set show id";

export const setShowIdAction = (id: number) => ({
  type: SET_SHOW_ID,
  payload: id,
});
