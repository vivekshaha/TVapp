import { Action, AnyAction } from "@reduxjs/toolkit";
import { Cast, Show } from "../Models/show";
import {
  SET_QUERY,
  SHOW_CAST_LOADED,
  SHOW_LOADED,
  SINGLE_SHOW_LOADED,
} from "../actions/Show";
import { produce } from "immer";
import { schema, normalize } from "normalizr";

type shows = {
  show: { [id: number]: Show };
  query: string;
  cast: { [id: number]: Cast };
};

const State: shows = {
  show: {},
  query: "",
  cast: {},
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
    case SINGLE_SHOW_LOADED:
      const showObject = action.payload;
      return produce(currentstate, (draft) => {
        draft.show = { [showObject.id]: showObject };
      });
    case SHOW_CAST_LOADED:
      return produce(currentstate, (draft) => {
        const CastSchema = new schema.Entity("casts");

        const normalizedata = normalize(action.payload, [CastSchema]);
        draft.cast = { ...normalizedata.entities.casts };
      });
    default:
      return currentstate;
  }
}
