import { FiltersFunction, FormattersMatcher } from "../types";
import { BingSearchResponse } from "./types";

export const domainUrl = `https://api.bing.microsoft.com/v7.0/search?`;

export const config = {
  headers: {
    "Ocp-Apim-Subscription-Key":
      process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY || "not-found",
  },
};

export const filterFunction: FiltersFunction = (inputSearch) =>
  `q=${inputSearch}`;

export const formatResponse: FormattersMatcher<BingSearchResponse> = (
  response
) =>
  response.webPages.value.map((item) => ({
    title: item.name,
    url: item.url,
    description: item.snippet,
  }));
