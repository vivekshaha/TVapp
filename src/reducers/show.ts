import { Action, AnyAction } from "@reduxjs/toolkit";
import { Cast, Show, showCast } from "../Models/show";
import {
  SET_QUERY,
  // SHOW_CAST_LOADED,
  SHOW_LOADED,
  SINGLE_SHOW_LOADED,
} from "../actions/Show";
import { produce } from "immer";
import { schema, normalize } from "normalizr";

type shows = {
  showlist: { [id: number]: showCast };
  query: string;
  show_query: { [search_query: string]: number[] };
  cast: { [id: number]: Cast };
  loading: boolean;
};

const State: shows = {
  showlist: {},
  show_query: {},
  query: "",
  cast: {},
  loading: false,
};
function normaldata(data: any) {
  // let obj = {} as any;
  let result: number[] = [];
  const entity = data.reduce((int: any, cur: any) => {
    result.push(cur.show.id);
    return { ...int, [cur.show.id]: cur };
  }, {});
  return { entity, result };
}

export function showreducers(currentstate = State, action: AnyAction) {
  switch (action.type) {
    case SHOW_LOADED:
      return produce(currentstate, (draft) => {
        const data = normaldata(action.payload);
        // console.log("dta indie the ruedue", data);

        // const showSchema = new schema.Entity("shows");
        // const allshow = action.payload.map((i: any) => i.show);
        // console.log("allshow", allshow);
        // const normalizedata = normalize(allshow, [showSchema]);
        // // console.log();
        // const CastSchema = new schema.Entity("cast");
        // const allcast = action.payload.map((i: any) => i.cast);
        // const rd = allcast.reduce((i: any, c: any) => {
        //   return [...i, ...c];
        // }, []);
        // console.log("allcast", rd);
        // const normalizedatacast = normalize(rd, [CastSchema]);
        // console.log("this is cast indies the reduce", normalizedatacast);
        // // draft.cast = normalizedatacast.entities.cast;
        draft.loading = false;
        draft.show_query[draft.query] = data.result;
        draft.showlist = { ...draft.showlist, ...data.entity };
        // draft.loading = false;
      });
    case SET_QUERY:
      return produce(currentstate, (draft) => {
        draft.loading = true;

        draft.query = action.payload;
      });
    case SINGLE_SHOW_LOADED:
      const showObject = action.payload;
      return produce(currentstate, (draft) => {
        // draft.query = "";
        console.log("showbojext", showObject);
        draft.showlist[showObject.show.id] = showObject;
      });
    // case SHOW_CAST_LOADED:
    //   return produce(currentstate, (draft) => {
    //     const CastSchema = new schema.Entity("casts");

    //     const normalizedata = normalize(action.payload, [CastSchema]);
    //     draft.cast = { ...normalizedata.entities.casts };
    //   });
    default:
      return currentstate;
  }
}
