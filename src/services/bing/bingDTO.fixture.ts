import { fixtureFactory } from "../../utils/fixture";
import {
  BingSearchResponse,
  BingEntityImage,
  BingEntityItem,
  BingEntityPresentationInfo,
  BingWebPageValueItem,
  BingWebPages,
  ContractualRuleItem,
} from "./types";

export const bingContractualRuleItemFixture =
  fixtureFactory<ContractualRuleItem>({
    _type: "ContractualRules/LicenseAttribution",
    license: {
      name: "CC-BY-SA",
      url: "http://creativecommons.org/licenses/by-sa/3.0/",
    },
    licenseNotice: "Text under CC-BY-SA license",
    mustBeCloseToContent: true,
    targetPropertyName: "description",
    text: "Wikipedia",
    url: "http://es.wikipedia.org/wiki/Cristiano_Ronaldo",
  });

export const bingEntityPresentationInfoFixture =
  fixtureFactory<BingEntityPresentationInfo>({
    entityScenario: "DominantEntity",
    entityTypeHints: ["Person"],
  });

export const bingEntityImageFixture = fixtureFactory<BingEntityImage>({
  height: 110,
  hostPageUrl:
    "http://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
  name: "Cristiano Ronaldo",
  provider: [
    {
      _type: "Organization",
      url: "http://es.wikipedia.org/wiki/Cristiano_Ronaldo",
    },
  ],
  sourceHeight: 711,
  sourceWidth: 474,
  thumbnailUrl: "https://www.bing.com/th",
  width: 110,
});

export const bingEntityItemFixture = fixtureFactory<BingEntityItem>({
  bingId: "049262f2-09df-f4a9-9e24-fd3cded67821",
  contractualRules: [bingContractualRuleItemFixture()],
  description:
    "Cristiano Ronaldo dos Santos Aveiro, más conocido como Cristiano",
  entityPresentationInfo: bingEntityPresentationInfoFixture(),
  id: "https://api.bing.microsoft.com/api/v7/#Entities.0",
  image: bingEntityImageFixture(),
  name: "Cristiano Ronaldo",
  webSearchUrl: "https://www.bing.com/entityexplore?q=Cristiano+Ronaldo",
});

export const bingWebPageValueItemFixture = fixtureFactory<BingWebPageValueItem>(
  {
    contractualRules: [bingContractualRuleItemFixture()],
    description: "Cristiano Ronaldo dos Santos Aveiro, más conocido como",
    dateLastCrawled: "2022-06-12T12:04:00.0000000Z",
    displayUrl: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
    id: "https://api.bing.microsoft.com/api/v7/#WebPages.0",
    isFamilyFriendly: true,
    isNavigational: false,
    language: "en",
    name: "Cristiano Ronaldo - Wikipedia",
    snippet: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portugu",
    url: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
  }
);

export const bingWebPagesFixture = fixtureFactory<BingWebPages>({
  totalEstimatedMatches: 61400000,
  webSearchUrl: "https://www.bing.com/search?q=Cristiano+Ronaldo",
  value: [bingWebPageValueItemFixture()],
});

export const bingSearchResponseFixture = fixtureFactory<BingSearchResponse>({
  _type: "SearchResponse",
  entities: { value: [bingEntityItemFixture()] },
  queryContext: { originalQuery: "Cristiano Ronaldo" },
  webPages: bingWebPagesFixture(),
});
