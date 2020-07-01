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
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  formView: getFormView(state),
  states: getStates(state),
  hasChanged: getHasChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  updateFormType: (fieldValue) => dispatch(updateFormType(fieldValue)),
  addSpouse: (fieldName, fieldValue) =>
    dispatch(addSpouse(fieldName, fieldValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
