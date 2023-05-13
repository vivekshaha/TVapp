import { call, put } from "@redux-saga/core/effects";
import { showCastsearch, showSingleSearch } from "../API/api";
import { AnyAction } from "redux";
import { showLoadedAction, singleShowLoadeAction } from "../actions/Show";

export function* fetchshows(action: AnyAction): Generator<any, any, any> {
  const data = yield call(showCastsearch, action.payload);
  yield put(showLoadedAction(data));
}
export function* fetchsingleshow(action: AnyAction): Generator<any, any, any> {
  const data = yield call(showSingleSearch, action.payload);
  yield put(singleShowLoadeAction(data));
}
// export function* fetchcast(action: AnyAction): Generator<any, any, any> {
//   while (true) {
//     const cast = yield call(showCasts, action.paylaod);
//     yield put(ShowCastAction(cast));
//   }
// }
