import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";
import { IPostState } from "./types";

export const initialState: IPostState = {
  step: 1,
  error: null
};

export type postAction = ActionType<typeof actions>;

export const postReducer = (
  state: IPostState = initialState,
  action: postAction
): IPostState => {
  switch (action.type) {
    case getType(actions.goNextStep): {
      const nextStep = state.step + 1;
      return { ...state, step: nextStep };
    }

    case getType(actions.goBackStep): {
      const nextStep = 1;
      return { ...state, step: nextStep };
    }
    default:
      return state;
  }
};
