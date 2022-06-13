import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { fetchInput } from "../results/actionCreators";
import { RootState } from "../state";
import { SearchEngines } from "../../services/searchServices";
import { ThunkDispatchType } from "../../utils/react-redux";
import { httpMockGoogleResponse } from "../../services/google/google.http-mocks";

const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatchType>(middlewares);

describe("load fetch data", () => {
  it("dispatches and error when the endpoints are not working", async () => {
    httpMockGoogleResponse({});

    const store = mockStore();

    await store.dispatch(fetchInput("mocked-response", [SearchEngines.GOOGLE]));
    const actionsResulted = store.getActions();

    console.log(actionsResulted);
  });
});
