import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IApplicationState } from "../state/ducks";
import { goNextStep, goBackStep } from "../state/ducks/main/actions";
import Main from "../components/MainPage/Main";

const mapStateToProps = ({ main }: IApplicationState) => ({ ...main });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  goNextStep: () => {
    dispatch(goNextStep());
  },
  goBackStep: () => {
    dispatch(goBackStep());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
