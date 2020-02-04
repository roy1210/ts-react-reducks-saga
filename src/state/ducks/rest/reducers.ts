import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";
import { IRestState } from "./types";

export const initialState: IRestState = {
  restStep: 1,
  fees: [],
  isLoading: false,
  posts: [],
  error: null
};

export type restAction = ActionType<typeof actions>;

export const restReducer = (
  state: IRestState = initialState,
  action: restAction
): IRestState => {
  switch (action.type) {
    case getType(actions.goNextStep): {
      const nextStep = state.restStep + 1;
      return { ...state, restStep: nextStep };
    }
    case getType(actions.fetchArticlesAsync.request): {
      return { ...state, isLoading: true, error: null };
    }
    case getType(actions.fetchArticlesAsync.success): {
      return { ...state, isLoading: false, posts: action.payload };
    }
    case getType(actions.fetchArticlesAsync.failure): {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
