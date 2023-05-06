import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
import { showreducers } from "./reducers/show";

const reducer = combineReducers({ show: showreducers });
export type State = ReturnType<typeof reducer>;
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
