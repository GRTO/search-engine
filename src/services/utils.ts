import { BingSearchResponse } from "./bing/types";
import { GoogleSearchResponse } from "./google/types";
import { SearchEngineResponse } from "./types";

export const isGoogleResponse = (
  response: SearchEngineResponse
): response is GoogleSearchResponse =>
  !!(response as GoogleSearchResponse).context;
  
  export const isBingResponse = (
    response: SearchEngineResponse
  ): response is BingSearchResponse =>
    !!(response as BingSearchResponse).queryContext;