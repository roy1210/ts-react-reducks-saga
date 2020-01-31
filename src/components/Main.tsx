import React from "react";
import PlayGround from "./PlayGround";
import { ISwapState } from "../state/ducks/swap/types";

export interface MainDispatchProps {
  goNextStep: () => void;
  goBackStep: () => void;
}

interface Props extends ISwapState, MainDispatchProps { }

const Main: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <PlayGround {...props} />
    </React.Fragment>
  );
};

export default Main;
