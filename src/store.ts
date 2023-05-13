import { applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
import { showreducers } from "./reducers/show";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { takeEvery, debounce } from "@redux-saga/core/effects";
import { SET_QUERY, SET_SHOW_ID } from "./actions/Show";
import { fetchshows, fetchsingleshow } from "./saggas/show";
import { showCastsearch } from "./API/api";

const reducer = combineReducers({ show: showreducers });
export type State = ReturnType<typeof reducer>;
function* rootSaga() {
  yield debounce(200, SET_QUERY, fetchshows);
  yield takeEvery(SET_SHOW_ID, fetchsingleshow);
  // yield takeEvery(SET_SHOW_ID, fetchcast);
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
