import { connect } from "react-redux";
import Activation from "../../../Pages/Activation";
import { getStates } from "../../../Store/Form/selectors";
import {
  simedisAccountChange,
  updatePageLoad,
  simedisChange,
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  simedisAccountChange: (fieldName, fieldValue) =>
    dispatch(simedisAccountChange(fieldName, fieldValue)),
  simedisChange: (fieldName, fieldValue) =>
    dispatch(simedisChange(fieldName, fieldValue)),
  updatePageLoad: (fieldValue) => dispatch(updatePageLoad(fieldValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activation);
