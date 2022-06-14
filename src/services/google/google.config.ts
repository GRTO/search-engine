import { FiltersFunction, FormattersMatcher } from "../types";
import { GoogleSearchResponse } from "./types";

export const domainUrl = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_API}&cx=${process.env.REACT_APP_GOOGLE_SEARCH_ID}`;

export const config = {};

export const filterFunction: FiltersFunction = (inputSearch) =>
  `&q=${inputSearch}`;

export const formatResponse: FormattersMatcher<GoogleSearchResponse> = (
  response
) =>
  response.items.map((item) => ({
    title: item.title,
    url: item.link,
    description: item.snippet,
  }));
