import { combineReducers } from "redux";

import results from "./results/reducerResults";

const reducers = {
  results,
};

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
