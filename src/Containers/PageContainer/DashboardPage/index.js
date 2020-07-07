import { connect } from "react-redux";
import Dashboard from "../../../Pages/Dashboard";
import { getStates } from "../../../Store/Form/selectors";
import {
  simedisAccountChange,
  updatePageLoad,
  addChange,
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  simedisAccountChange: (fieldName, fieldValue) =>
    dispatch(simedisAccountChange(fieldName, fieldValue)),
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  updatePageLoad: (fieldValue) => dispatch(updatePageLoad(fieldValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
