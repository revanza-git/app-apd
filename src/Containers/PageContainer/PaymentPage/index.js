import { connect } from "react-redux";
import Payment from "../../../Pages/Payment";
import {
  getFormView,
  getFormEdit,
  getHasChanged,
} from "../../../Store/Form/selectors";
import { saveForm } from "../../../Store/Form/thunk";
import { addChange } from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  formView: getFormView(state),
  formEdit: getFormEdit(state),
  hasChanged: getHasChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  saveChanges: () => dispatch(saveForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
