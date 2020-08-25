import { connect } from "react-redux";
import Activation from "../../../Pages/Activation";
import { getStates } from "../../../Store/Form/selectors";
import {
  simedisAccountChange,
  updatePageLoad,
  simedisPaymentChange,
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  simedisAccountChange: (fieldName, fieldValue) =>
    dispatch(simedisAccountChange(fieldName, fieldValue)),
  simedisPaymentChange: (fieldName, fieldValue) =>
    dispatch(simedisPaymentChange(fieldName, fieldValue)),
  updatePageLoad: (fieldValue) => dispatch(updatePageLoad(fieldValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activation);
