import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { get, post } from "../../../utils/apiClient";
// import { camelize } from "../../../utils/camelize";
// import { BLOCKCHAIN_INFO, REST_API } from "../../../utils/configManager";
// import { monitorTx } from "../../../utils/wsClient";
import { IApplicationState } from "../index";
import { goNextStep } from "./actions";
import * as SwapActionTypes from "./types";

/**
 * Called when a user inputs sending amount.
 * 1. Validates the input balance, and updates the Redux state about validation result.
 * 2. Calculates the receiving balance, and updates the Redux state about the receiving amount.
 * @param action
 */

/**
 * Called when users click `Next` button.
 * @param action
 */
function* handleNextActionButton(
  action: ReturnType<typeof goNextStep>
): Generator {
  const step = yield select(({ swap }: IApplicationState) => swap.step);
  if (step === 2) {
    console.log("It is step 2!!");
  }
}

export default function* swapSaga() {
  yield all([takeLatest(SwapActionTypes.GO_NEXT_STEP, handleNextActionButton)]);
}
