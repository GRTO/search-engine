import {
  fetchSearchEngine,
  SearchEngines,
} from "../../services/searchServices";
import { ThunkDispatchType } from "../../utils/react-redux";
import { ResultActions } from "./types";
import { formatResponses } from "./utils";

export const fetchInput =
  (input: string, searchEngines: Array<SearchEngines>) =>
  async (dispatch: ThunkDispatchType) => {
    try {
      dispatch({ type: ResultActions.RESULT_SEARCH_LOADING });

      const response = await fetchSearchEngine(searchEngines, input);

      const formattedResponse = formatResponses(response);

      dispatch({
        type: ResultActions.RESULT_SEARCH_SUCCESS,
        payload: formattedResponse,
      });
    } catch (e) {
      dispatch({ type: ResultActions.RESULT_SEARCH_FAIL });
    }
  };
