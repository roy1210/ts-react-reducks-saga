import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";
import { ISwapState } from "./types";

export const initialState: ISwapState = {
  step: 1,
  error: null
};

export type SwapAction = ActionType<typeof actions>;

export const swapReducer = (
  state: ISwapState = initialState,
  action: SwapAction
): ISwapState => {
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
