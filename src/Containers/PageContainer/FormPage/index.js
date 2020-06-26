import { connect } from "react-redux";
import FormPage from "../../../Pages/FormPage";
import {
  getFormView,
  getFormEdit,
  getHasChanged,
} from "../../../Store/Form/selectors";
import { setupForm, saveForm } from "../../../Store/Form/thunk";
import { addChange } from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  formView: getFormView(state),
  formEdit: getFormEdit(state),
  hasChanged: getHasChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  discardChanges: () => dispatch(setupForm()),
  saveChanges: () => dispatch(saveForm()),
  setUpEditableForm: () => dispatch(setupForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
