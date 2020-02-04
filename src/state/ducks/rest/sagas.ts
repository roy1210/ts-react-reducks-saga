import { fetchArticlesAsync } from "./actions";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { get } from "../../../utils/apiClient";
import * as restActionTypes from "./types";

/**
 * Calls API.
 * @param action
 */
function* handleFetchArticles(
  action: ReturnType<typeof fetchArticlesAsync.request>
): Generator {
  const url = process.env.REACT_APP_JSON_PLACEHOLDER + "/posts";

  try {
    const res = yield call(get, url);
    // @ts-ignore
    const data: IFetchArticles = res.parsedBody;
    yield put(fetchArticlesAsync.success(data));
  } catch (err) {
    yield put(fetchArticlesAsync.failure(err));
  }
}

export default function* restSaga() {
  yield all([
    takeLatest(restActionTypes.FETCH_ARTICLES_REQUEST, handleFetchArticles)
  ]);
}
