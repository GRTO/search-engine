import { cleanup } from "@testing-library/react";
import { rendertSearchItem } from "./SearchItem.utils";

describe("SearchItem", () => {
  afterEach(cleanup);

  test("Should render the component", () => {
    const { assert } = rendertSearchItem();

    assert.descriptionHasBeenRendered();
    assert.searchEngineHasBeenRendered();
    assert.titleHasBeenRendered();
    assert.urlHasBeenRendered();
  });
});
