import { createAction, createAsyncAction } from "typesafe-actions";
import * as postActionTypes from "./types";

export const goNextStep = createAction(postActionTypes.GO_NEXT_STEP, action => {
  return () => action();
});

export const goBackStep = createAction(postActionTypes.GO_BACK_STEP, action => {
  return () => action();
});
