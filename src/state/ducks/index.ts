import { combineReducers } from "redux";
import { fork, all } from "redux-saga/effects";
import { IMainState } from "./main/types";
import { IRestState } from "./rest/types";
import { mainReducer } from "./main/reducers";
import mainSaga from "./main/sagas";
import restSaga from "./rest/sagas";
import { restReducer } from "./rest/reducers";

export interface IApplicationState {
  main: IMainState;
  rest: IRestState;
}

export const rootReducer = combineReducers<IApplicationState>({
  main: mainReducer,
  rest: restReducer
});

export function* rootSaga() {
  yield all([fork(mainSaga), fork(restSaga)]);
}
