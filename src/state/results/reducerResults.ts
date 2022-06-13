import { ResultActions, ResultDispatchTypes, ResultState } from "./types";

export const initialResultState: ResultState = { loading: false };

const reducerResults = (
  state: ResultState = initialResultState,
  action: ResultDispatchTypes
): ResultState => {
  switch (action.type) {
    case ResultActions.RESULT_SEARCH_SUCCESS:
      return { loading: false, error: undefined, resultData: action.payload };
    case ResultActions.RESULT_SEARCH_LOADING:
      return { loading: true, error: undefined };
    case ResultActions.RESULT_SEARCH_FAIL:
      return {
        loading: false,
        error: new Error("There was an error on the server"),
      };
    default:
      return state;
  }
};

export default reducerResults;
