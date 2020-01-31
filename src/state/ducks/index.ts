import { combineReducers } from "redux";
import { fork, all } from "redux-saga/effects";
import { ISwapState } from "./swap/types";
import { swapReducer } from "./swap/reducers";
import swapSaga from "./swap/sagas";

export interface IApplicationState {
  swap: ISwapState;
}

export const rootReducer = combineReducers<IApplicationState>({
  swap: swapReducer
});

export function* rootSaga() {
  yield all([fork(swapSaga)]);
}
