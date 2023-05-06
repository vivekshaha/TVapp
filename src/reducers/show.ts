import { Action, AnyAction } from "@reduxjs/toolkit";
import { Show } from "../Models/show";
import { SET_QUERY, SHOW_LOADED } from "../actions/Show";
import { produce } from "immer";
import { schema, normalize } from "normalizr";

type shows = {
  show: { [id: number]: Show };
  query: string;
};

const State: shows = {
  show: {},
  query: "",
};
export function showreducers(currentstate = State, action: AnyAction) {
  switch (action.type) {
    case SHOW_LOADED:
      return produce(currentstate, (draft) => {
        const showSchema = new schema.Entity("shows");

        const normalizedata = normalize(action.payload, [showSchema]);
        draft.show = { ...normalizedata.entities.shows };
      });
    case SET_QUERY:
      return produce(currentstate, (draft) => {
        draft.query = action.payload;
      });
    default:
      return currentstate;
  }
}
