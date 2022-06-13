import { SearchEngines } from "../../services/searchServices";
import { ResultItem as ServiceResultItem } from "../../services/types";
import { ResultItem } from "./types";

export const formatResponses = (
  response: Record<SearchEngines, Array<ServiceResultItem>>
): Array<ResultItem> =>
  Object.values(SearchEngines)
    .map((searchEngine) =>
      response[searchEngine].map((item) => ({ ...item, searchEngine }))
    )
    .flat()
    .sort((itemA, itemB) => (itemA.title < itemB.title ? 1 : -1));
