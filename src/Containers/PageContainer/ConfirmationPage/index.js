import { connect } from "react-redux";
import Confirmation from "../../../Pages/Confirmation";
import { getStates } from "../../../Store/Form/selectors";
import { addChange, postApi } from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  postApi: (url, data, config) => dispatch(postApi(url, data, config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
