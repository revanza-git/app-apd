import { connect } from "react-redux";
import Finished from "../../../Pages/Finished";
import { getStates } from "../../../Store/Form/selectors";
// import { setupForm, saveForm } from "../../../Store/Form/thunk";
import {
  simedisAccountChange,
  simedisPaymentChange,
  updatePageLoad,
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  simedisPaymentChange: (fieldName, fieldValue) =>
    dispatch(simedisPaymentChange(fieldName, fieldValue)),
  simedisAccountChange: (fieldName, fieldValue) =>
    dispatch(simedisAccountChange(fieldName, fieldValue)),
  updatePageLoad: (fieldValue) => dispatch(updatePageLoad(fieldValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Finished);
