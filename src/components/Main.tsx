import React from "react";
import PlayGround from "./PlayGround";
import { IPostState } from "../state/ducks/post/types";

export interface MainDispatchProps {
  goNextStep: () => void;
  goBackStep: () => void;
}

interface Props extends IPostState, MainDispatchProps { }

const Main: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <PlayGround {...props} />
    </React.Fragment>
  );
};

export default Main;
