export interface GoogleQuery {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface GoogleCSEThumbnailItem {
  src: string;
  width: string;
  height: string;
}

export interface GoogleMetaTagItem {
  referrer: string;
  "og:image": string;
  "theme-color": string;
  "og:image:width": string;
  "og:type": string;
  viewport: string;
  "og:title": string;
  "og:image:height": string;
  "format-detection": string;
}

export interface GoogleCSEImageItem {
  src: string;
}

export interface GooglePageMap {
  cse_thumbnail: Array<GoogleCSEThumbnailItem>;
  metatags: Array<GoogleMetaTagItem>;
  cse_image: Array<GoogleCSEImageItem>;
}

export interface GoogleSearchItem {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: GooglePageMap;
}

export interface GoogleSearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface GoogleSearchResponse {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  queries: {
    request: Array<GoogleQuery>;
    nextPage: Array<GoogleQuery>;
  };
  context: { title: string };
  searchInformation: GoogleSearchInformation;
  items: Array<GoogleSearchItem>;
}
