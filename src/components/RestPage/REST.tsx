import React from "react";
import RestPlayGround from "./RestPlayGround";
import { IRestState } from "../../state/ducks/rest/types";

export interface MainDispatchProps {
  goNextStep: () => void;
  fetchArticlesAsync: () => void;
}

interface Props extends IRestState, MainDispatchProps { }

const REST: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <RestPlayGround {...props} />
    </React.Fragment>
  );
};

export default REST;
