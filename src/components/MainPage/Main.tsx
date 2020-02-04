import React from "react";
import PlayGround from "./PlayGround";
import { IMainState } from "../../state/ducks/main/types";

export interface MainDispatchProps {
  goNextStep: () => void;
  goBackStep: () => void;
}

interface Props extends IMainState, MainDispatchProps { }

const Main: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <PlayGround {...props} />
    </React.Fragment>
  );
};

export default Main;
