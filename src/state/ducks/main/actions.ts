import { createAction, createAsyncAction } from "typesafe-actions";
import * as mainActionTypes from "./types";

export const goNextStep = createAction(mainActionTypes.GO_NEXT_STEP, action => {
  return () => action();
});

export const goBackStep = createAction(mainActionTypes.GO_BACK_STEP, action => {
  return () => action();
});
