import { call, put, takeLatest } from "@redux-saga/core/effects";
import { showSearch, showSingleSearch } from "../API/api";
import { AnyAction } from "redux";
import { showLoadedAction, singleShowLoadeAction } from "../actions/Show";

export function* fetchshows(action: AnyAction): Generator<any, any, any> {
  const data = yield call(showSearch, action.payload);
  yield put(showLoadedAction(data));
}
export function* fetchsingleshow(action: AnyAction): Generator<any, any, any> {
  console.log("single show action in saggcalled");
  const data = yield call(showSingleSearch, action.payload);
  yield put(singleShowLoadeAction(data));
}
