import { SearchEngines } from "../../services/searchServices";

export enum ResultActions {
  RESULT_SEARCH_LOADING = "RESULT_SEARCH_LOADING",
  RESULT_SEARCH_FAIL = "RESULT_SEARCH_FAIL",
  RESULT_SEARCH_SUCCESS = "RESULT_SEARCH_SUCCESS",
}

export interface ResultItem {
  title: string;
  url: string;
  description: string;
  searchEngine: SearchEngines;
}

/* New types */
export type ResultData = Array<ResultItem>;

export interface ResultState {
  loading: boolean;
  resultData?: ResultData;
  error?: Error;
}

export interface ResultSearchFail {
  type: typeof ResultActions.RESULT_SEARCH_FAIL;
}

export interface ResultSearchLoading {
  type: typeof ResultActions.RESULT_SEARCH_LOADING;
}

export interface ResultSearchSuccess {
  type: typeof ResultActions.RESULT_SEARCH_SUCCESS;
  payload: Array<ResultItem>;
}

export type ResultDispatchTypes =
  | ResultSearchFail
  | ResultSearchLoading
  | ResultSearchSuccess;
