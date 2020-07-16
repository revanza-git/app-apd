import { connect } from "react-redux";
import Registration from "../../../Pages/Registration";
import { getStates, getHasChanged } from "../../../Store/Form/selectors";
import {
  addChange,
  updateFormType,
  addSpouse,
  updateRegType,
  simedisChange,
  updatePageLoad,
  updateGender,
} from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
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
  updateGender: (payload) => dispatch(updateGender(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
