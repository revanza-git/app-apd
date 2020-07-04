import { connect } from "react-redux";
import Payment from "../../../Pages/Payment";
import {
  getFormView,
  getStates,
  getHasChanged,
} from "../../../Store/Form/selectors";
import { addChange, postApi } from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  formView: getFormView(state),
  states: getStates(state),
  hasChanged: getHasChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  postApi: (url, data, config) => dispatch(postApi(url, data, config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
