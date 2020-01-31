import { combineReducers } from "redux";
import { fork, all } from "redux-saga/effects";
import { IPostState } from "./post/types";
import { postReducer } from "./post/reducers";
import postSaga from "./post/sagas";

export interface IApplicationState {
  post: IPostState;
}

export const rootReducer = combineReducers<IApplicationState>({
  post: postReducer
});

export function* rootSaga() {
  yield all([fork(postSaga)]);
}
