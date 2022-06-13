import { fixtureFactory } from "../../utils/fixture";
import {
  GoogleCSEImageItem,
  GoogleCSEThumbnailItem,
  GoogleMetaTagItem,
  GooglePageMap,
  GoogleQuery,
  GoogleSearchInformation,
  GoogleSearchItem,
  GoogleSearchResponse,
} from "./types";

export const googleCSEThumbnailItemFixture =
  fixtureFactory<GoogleCSEThumbnailItem>({
    src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQe4f_hxpPEpazhmKC0AI9JfqNAPqyXWG8PWHMeUdI-RjKhOuZvrdRZZXo",
    width: "275",
    height: "183",
  });

export const googleCSEImageItemFixture = fixtureFactory<GoogleCSEImageItem>({
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/ADFA_Lecture_Theatres.jpg/1200px-ADFA_Lecture_Theatres.jpg",
});

export const googleMetaTagItemFixture = fixtureFactory<GoogleMetaTagItem>({
  referrer: "origin",
  "og:image":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/ADFA_Lecture_Theatres.jpg/1200px-ADFA_Lecture_Theatres.jpg",
  "theme-color": "#eaecf0",
  "og:image:width": "1200",
  "og:type": "website",
  viewport:
    "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
  "og:title": "Lecture - Wikipedia",
  "og:image:height": "799",
  "format-detection": "telephone=no",
});

export const googleQueryFixture = fixtureFactory<GoogleQuery>({
  title: "Google Custom Search - lectures",
  totalResults: "1380000000",
  searchTerms: "lectures",
  count: 10,
  startIndex: 1,
  inputEncoding: "utf8",
  outputEncoding: "utf8",
  safe: "off",
  cx: "custom_cx",
});

export const googlePageMapFixture = fixtureFactory<GooglePageMap>({
  cse_thumbnail: [googleCSEThumbnailItemFixture()],
  cse_image: [googleCSEImageItemFixture()],
  metatags: [googleMetaTagItemFixture()],
});

export const googleSearchItemFixture = fixtureFactory<GoogleSearchItem>({
  kind: "customsearch#result",
  title: "Lecture - Wikipedia",
  htmlTitle: "<b>Lecture</b> - Wikipedia",
  link: "http://mxehazide.com/?_=%2Fwiki%2FLecture%233LXCDlcSXjsPrErld1MWfyzgW8esZChP",
  displayLink: "mxehazide.com",
  snippet:
    "A lecture (from Latin lēctūra “reading” ) is an oral presentation intended to present information or teach people about a particular subject, for example by ...",
  htmlSnippet:
    "A <b>lecture</b> (from Latin lēctūra “reading” ) is an oral presentation intended to present information or teach people about a particular subject, for example by&nbsp;...",
  cacheId: "dataCacheId",
  formattedUrl:
    "mxehazide.com/?_= %2Fwiki%2FLecture%233LXCDlcSXjsPrErld1MWfyzgW8esZChP",
  htmlFormattedUrl:
    "mxehazide.com/?_= %2Fwiki%2F<b>Lecture</b>%233LXCDlcSXjsPrErld1MWfyzgW8esZChP",
  pagemap: googlePageMapFixture(),
});

export const googleSearchInformationFixture =
  fixtureFactory<GoogleSearchInformation>({
    searchTime: 0.451994,
    formattedSearchTime: "0.45",
    totalResults: "1380000000",
    formattedTotalResults: "1,380,000,000",
  });

export const googleFixture = fixtureFactory<GoogleSearchResponse>({
  kind: "customsearch#search",
  context: { title: "Google search" },
  items: [googleSearchItemFixture()],
  queries: {
    nextPage: [googleQueryFixture()],
    request: [googleQueryFixture()],
  },
  searchInformation: googleSearchInformationFixture(),
  url: {
    type: "application/json",
    template: "google_template_search_url",
  },
});
