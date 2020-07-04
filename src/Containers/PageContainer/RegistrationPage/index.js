import { connect } from "react-redux";
import Registration from "../../../Pages/Registration";
import {
  getFormView,
  getStates,
  getHasChanged,
} from "../../../Store/Form/selectors";
import {
  addChange,
  updateFormType,
  addSpouse,
  updateRegType,
  simedisChange,
  updatePageLoad,
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  formView: getFormView(state),
  states: getStates(state),
  hasChanged: getHasChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  simedisChange: (fieldName, fieldValue) =>
    dispatch(simedisChange(fieldName, fieldValue)),
  updateFormType: (fieldValue) => dispatch(updateFormType(fieldValue)),
  updateRegType: (fieldValue) => dispatch(updateRegType(fieldValue)),
  addSpouse: (fieldName, fieldValue) =>
    dispatch(addSpouse(fieldName, fieldValue)),
  updatePageLoad: (fieldValue) => dispatch(updatePageLoad(fieldValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
