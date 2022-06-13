/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { SearchEngines } from "../../../services/searchServices";
import { ResultItem } from "../../../state/results/types";
import { render } from "../../../utils/test-utils";
import SearchItem from "../../SearchItem";

export const rendertSearchItem = (props?: Partial<ResultItem>) => {
  const defaultProps: ResultItem = {
    description: "test-description",
    searchEngine: SearchEngines.GOOGLE,
    title: "test-title",
    url: "test-url",
  };

  const { description, searchEngine, title, url } = {
    ...defaultProps,
    ...props,
  };

  const rendered = render(
    <SearchItem
      description={description}
      searchEngine={searchEngine}
      title={title}
      url={url}
    />
  );

  const searchEnginePattern = new RegExp(searchEngine, "g");
  const titlePattern = new RegExp(title, "g");

  const helpers = {
    act: {},
    assert: {
      descriptionHasBeenRendered: () => {
        expect(rendered.getByText(description)).toBeInTheDocument();
      },
      urlHasBeenRendered: () => {
        expect(rendered.getByText(url)).toBeInTheDocument();
      },
      titleHasBeenRendered: () => {
        expect(rendered.getByText(titlePattern)).toBeInTheDocument();
      },
      searchEngineHasBeenRendered: () => {
        expect(rendered.getByText(searchEnginePattern)).toBeInTheDocument();
      },
    },
  };

  return { ...helpers, rendered };
};
