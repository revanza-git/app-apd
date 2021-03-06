import { connect } from "react-redux";
import Dashboard from "../../../Pages/Dashboard";
import { getStates } from "../../../Store/Form/selectors";
import {
  simedisAccountChange,
  updatePageLoad,
  formOne,
  updatePolicies,
  updateRegistrationType,
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  simedisAccountChange: (fieldName, fieldValue) =>
    dispatch(simedisAccountChange(fieldName, fieldValue)),
  formOne: (fieldName, fieldValue) => dispatch(formOne(fieldName, fieldValue)),
  updatePageLoad: (fieldValue) => dispatch(updatePageLoad(fieldValue)),
  updatePolicies: (payload) => dispatch(updatePolicies(payload)),
  updateRegistrationType: (payload) =>
    dispatch(updateRegistrationType(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
