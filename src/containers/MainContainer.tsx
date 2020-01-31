import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IApplicationState } from "../state/ducks";
import {
  goNextStep,
  goBackStep,
} from "../state/ducks/post/actions";
import Main from "../components/Main";

const mapStateToProps = ({ post }: IApplicationState) => ({ ...post });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  goNextStep: () => {
    dispatch(goNextStep());
  },
  goBackStep: () => {
    dispatch(goBackStep());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
