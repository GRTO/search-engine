import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { ResultDispatchTypes } from "../state/results/types";
import { RootState } from "../state/state";

export type ThunkDispatchType = ThunkDispatch<{}, {}, ResultDispatchTypes>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<ThunkDispatchType>();
