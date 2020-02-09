import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IApplicationState } from "../state/ducks";
import { goNextStep, fetchArticlesAsync } from "../state/ducks/rest/actions";
import Rest from "../components/RestPage/REST";

const mapStateToProps = ({ rest }: IApplicationState) => ({ ...rest });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  goNextStep: () => {
    dispatch(goNextStep());
  },
  fetchArticlesAsync: () => {
    dispatch(fetchArticlesAsync.request());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rest);
