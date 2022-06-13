import { BingSearchResponse } from "./bing/types";
import { GoogleSearchResponse } from "./google/types";
import { SearchEngines } from "./searchServices";

export type FiltersFunction = (input: string | number) => string;

export type FormattersMatcher<T extends SearchEngineResponse> = (
  response: T
) => Array<ResultItem>;

export type SearchEngineResponse = GoogleSearchResponse | BingSearchResponse;

export interface ResultItem {
  title: string;
  url: string;
  description: string;
}

export interface QueryParams {
  inputSearch: string;
}
