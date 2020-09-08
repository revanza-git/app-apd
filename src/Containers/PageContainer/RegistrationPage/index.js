import { connect } from "react-redux";
import Registration from "../../../Pages/Registration";
import { getStates } from "../../../Store/Form/selectors";
import {
  formOne,
  formTwo,
  updateFormType,
  updateRegType,
  simedisPaymentChange,
  simedisAccountChange,
  updatePageLoad,
  updateGender,
  updateRelationship,
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  formOne: (fieldName, fieldValue) => dispatch(formOne(fieldName, fieldValue)),
  formTwo: (fieldName, fieldValue) => dispatch(formTwo(fieldName, fieldValue)),
  simedisPaymentChange: (fieldName, fieldValue) =>
    dispatch(simedisPaymentChange(fieldName, fieldValue)),
  simedisAccountChange: (fieldName, fieldValue) =>
    dispatch(simedisAccountChange(fieldName, fieldValue)),
  updateFormType: (fieldValue) => dispatch(updateFormType(fieldValue)),
  updateRegType: (fieldValue) => dispatch(updateRegType(fieldValue)),
  updatePageLoad: (fieldValue) => dispatch(updatePageLoad(fieldValue)),
  updateGender: (payload) => dispatch(updateGender(payload)),
  updateRelationship: (payload) => dispatch(updateRelationship(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
