import { call, put, takeLatest } from "@redux-saga/core/effects";
import { showCasts, showSearch, showSingleSearch } from "../API/api";
import { AnyAction } from "redux";
import {
  ShowCastAction,
  showLoadedAction,
  singleShowLoadeAction,
} from "../actions/Show";

export function* fetchshows(action: AnyAction): Generator<any, any, any> {
  const data = yield call(showSearch, action.payload);
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
