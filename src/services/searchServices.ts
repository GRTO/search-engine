import {
  domainUrl as domainGoogleUrl,
  filterFunction as filterGoogleFunction,
  formatResponse as formatGoogleResponse,
  config as configGoogle,
} from "./google/google.config";
import {
  domainUrl as domainBingUrl,
  filterFunction as filterBingFunction,
  formatResponse as formatBingResponse,
  config as configBing,
} from "./bing/bing.config";
import { FiltersFunction, ResultItem, SearchEngineResponse } from "./types";
import { isBingResponse, isGoogleResponse } from "./utils";

export enum SearchEngines {
  GOOGLE = "google",
  BING = "bing",
}

export const DomainUrlMatcher: Record<SearchEngines, string> = {
  [SearchEngines.GOOGLE]: domainGoogleUrl,
  [SearchEngines.BING]: domainBingUrl,
};

export const filtersMatcher: Record<SearchEngines, FiltersFunction> = {
  [SearchEngines.GOOGLE]: filterGoogleFunction,
  [SearchEngines.BING]: filterBingFunction,
};

export const formattersMatcher = {
  [SearchEngines.GOOGLE]: formatGoogleResponse,
  [SearchEngines.BING]: formatBingResponse,
};

export const configsMatcher = {
  [SearchEngines.GOOGLE]: configGoogle,
  [SearchEngines.BING]: configBing,
};

export const matchSearchEngine = (
  searchEngine: SearchEngines,
  searchText: string
): string =>
  `${DomainUrlMatcher[searchEngine]}${filtersMatcher[searchEngine](
    searchText
  )}`;

export const fetchDomains = (
  searchEngines: Array<SearchEngines>,
  searchText: string
): Array<Promise<SearchEngineResponse>> =>
  searchEngines.map((searchEngine) =>
    fetch(
      matchSearchEngine(searchEngine, searchText),
      configsMatcher[searchEngine]
    ).then((res) => res.json())
  );

export const formatResponse = (
  response: SearchEngineResponse
): Array<ResultItem> => {
  if (isGoogleResponse(response)) {
    return formattersMatcher[SearchEngines.GOOGLE](response);
  } else if (isBingResponse(response)) {
    return formattersMatcher[SearchEngines.BING](response);
  }
  return [];
};

export const fetchSearchEngine = async (
  searchEngines: Array<SearchEngines>,
  searchText: string
): Promise<Record<SearchEngines, Array<ResultItem>>> => {
  const searchEngineDomains = Array.from(new Set(searchEngines));
  const responses = await Promise.all(
    fetchDomains(searchEngineDomains, searchText)
  );

  const searchEnginesValues = Object.values(SearchEngines);

  const initialSearchValues: Record<
    SearchEngines,
    Array<ResultItem>
  > = {} as Record<SearchEngines, Array<ResultItem>>;
  const defaultSearchValues = searchEnginesValues.reduce(
    (prev, curr) => ({ ...prev, [curr]: [] }),
    initialSearchValues
  );
  /* TODO: Verify if any endpoint fails */
  const formattedResponses = responses.reduce(
    (prev, curr, index) => ({
      ...prev,
      [searchEngineDomains[index]]: formatResponse(curr),
    }),
    defaultSearchValues
  );

  return formattedResponses;
};
