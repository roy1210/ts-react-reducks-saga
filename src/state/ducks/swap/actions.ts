import { createAction, createAsyncAction } from "typesafe-actions";
import * as SwapActionTypes from "./types";

export const goNextStep = createAction(SwapActionTypes.GO_NEXT_STEP, action => {
  return () => action();
});

export const goBackStep = createAction(SwapActionTypes.GO_BACK_STEP, action => {
  return () => action();
});
