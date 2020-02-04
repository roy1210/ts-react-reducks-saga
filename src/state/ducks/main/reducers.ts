import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";
import { IMainState } from "./types";

export const initialState: IMainState = {
  step: 1,
  error: null
};

export type mainAction = ActionType<typeof actions>;

export const mainReducer = (
  state: IMainState = initialState,
  action: mainAction
): IMainState => {
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
