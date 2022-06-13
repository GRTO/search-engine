export interface ContractualRuleItem {
  _type: string;
  license: {
    name: string;
    url: string;
  };
  licenseNotice: string;
  mustBeCloseToContent: boolean;
  targetPropertyName: string;
  text?: string;
  url?: string;
}

export interface BingEntityImage {
  height: number;
  hostPageUrl: string;
  name: string;
  provider: [
    {
      _type: string;
      url: string;
    }
  ];
  sourceHeight: number;
  sourceWidth: number;
  thumbnailUrl: string;
  width: number;
}

export interface BingEntityPresentationInfo {
  entityScenario: string;
  entityTypeHints: Array<string>;
}

export interface BingEntityItem {
  bingId: string;
  contractualRules: Array<ContractualRuleItem>;
  description: string;
  entityPresentationInfo: BingEntityPresentationInfo;
  id: string;
  image: BingEntityImage;
  name: string;
  webSearchUrl: string;
}

export interface BingWebPageValueItem {
  contractualRules: Array<ContractualRuleItem>;
  url: string;
  dateLastCrawled: string;
  displayUrl: string;
  id: string;
  isFamilyFriendly: boolean;
  isNavigational: boolean;
  language: string;
  name: string;
  snippet: string;
  description: string;
}

export interface BingWebPages {
  totalEstimatedMatches: number;
  webSearchUrl: string;
  value: Array<BingWebPageValueItem>;
}

export interface BingSearchResponse {
  _type: string;
  queryContext: {
    originalQuery: string;
  };
  entities: { value: Array<BingEntityItem> };
  webPages: BingWebPages;
}
