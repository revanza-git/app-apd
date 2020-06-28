import { connect } from "react-redux";
import Payment from "../../../Pages/Payment";
import {
  getFormView,
  getFormEdit,
  getHasChanged,
} from "../../../Store/Form/selectors";
import { addChange, submitToMidtrans } from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  formView: getFormView(state),
  formEdit: getFormEdit(state),
  hasChanged: getHasChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  submitToMidtrans: (url, data, config) =>
    dispatch(submitToMidtrans(url, data, config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
