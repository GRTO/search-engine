import nock, { Scope } from "nock";
import { matchSearchEngine, SearchEngines } from "../searchServices";
import { QueryParams } from "../types";
import { googleFixture } from "./googleDTO.fixture";
import { GoogleSearchResponse } from "./types";

export const httpMockGoogleResponse = (
  overrides: Partial<{
    code: number;
    response: GoogleSearchResponse;
    parameters: QueryParams;
  }>
): Scope => {
  const mockedResponse = googleFixture();

  const defaults = {
    code: 200,
    response: mockedResponse,
    parameters: {
      searchText: "mocked-response",
    },
  };

  const { parameters, code, response } = {
    ...defaults,
    ...overrides,
    parameters: { ...defaults.parameters, ...overrides.parameters },
  };

  const apiUrl = "https://www.googleapis.com";
  const query = `/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API}&cx=${process.env.REACT_APP_GOOGLE_SEARCHY_ID}&q=${parameters.searchText}`;

  return nock(apiUrl).get(query).reply(code, response);
};
