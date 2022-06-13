import { ReactElement } from "react";
import {
  configure,
  render,
  RenderOptions,
  queryByAttribute,
  queryHelpers,
} from "@testing-library/react";
import store from "../state/store";
import { Provider } from "react-redux";

// Configure custom data-testid [Blog Source](https://testing-library.com/docs/queries/bytestid/)
configure({ testIdAttribute: "data-test" });

const AllTheProviders: React.FC<{ children: any }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

const getByInternalTestId = queryByAttribute.bind(null, "data-test");

const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(
  null,
  "data-test"
);

export * from "@testing-library/react";

export { customRender as render, getByInternalTestId, queryAllByTestId };
