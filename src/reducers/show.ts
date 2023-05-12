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
  show_query: { [search_query: string]: number[] };
  cast: { [id: number]: Cast };
  loading: boolean;
};

const State: shows = {
  show: {},
  show_query: {},
  query: "",
  cast: {},
  loading: false,
};
export function showreducers(currentstate = State, action: AnyAction) {
  switch (action.type) {
    case SHOW_LOADED:
      return produce(currentstate, (draft) => {
        const showSchema = new schema.Entity("shows");
        const allshow = action.payload.map((i: any) => i.show);
        console.log("allshow", allshow);
        const normalizedata = normalize(allshow, [showSchema]);
        // console.log();
        const CastSchema = new schema.Entity("cast");
        const allcast = action.payload.map((i: any) => i.cast);
        const rd = allcast.reduce((i: any, c: any) => {
          return [...i, ...c];
        }, []);
        console.log("allcast", rd);

        const normalizedatacast = normalize(rd, [CastSchema]);
        console.log("this is cast indies the reduce", normalizedatacast);
        // draft.cast = normalizedatacast.entities.cast;
        draft.loading = true;

        draft.show_query[draft.query] = normalizedata.result;

        draft.show = { ...draft.show, ...normalizedata.entities.shows };
        draft.loading = false;
      });
    case SET_QUERY:
      return produce(currentstate, (draft) => {
        draft.loading = true;

        draft.query = action.payload;
      });
    case SINGLE_SHOW_LOADED:
      const showObject = action.payload;
      return produce(currentstate, (draft) => {
        draft.query = "";
        draft.show[showObject.id] = showObject;
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
