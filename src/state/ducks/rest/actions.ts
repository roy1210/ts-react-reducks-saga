import { createAction, createAsyncAction } from "typesafe-actions";
import * as RestActionTypes from "./types";
import { IFetchArticles } from "./types";

export const goNextStep = createAction(RestActionTypes.GO_NEXT_STEP, action => {
  return () => action();
});

export const fetchArticlesAsync = createAsyncAction(
  RestActionTypes.FETCH_ARTICLES_REQUEST,
  RestActionTypes.FETCH_ARTICLES_SUCCESS,
  RestActionTypes.FETCH_ARTICLES_FAILURE
)<void, IFetchArticles, Error>();
