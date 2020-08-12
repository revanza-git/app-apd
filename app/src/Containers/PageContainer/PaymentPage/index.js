import { connect } from "react-redux";
import Payment from "../../../Pages/Payment";
import { getStates } from "../../../Store/Form/selectors";
import { formOne, postApi } from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  formOne: (fieldName, fieldValue) => dispatch(formOne(fieldName, fieldValue)),
  postApi: (url, data, config) => dispatch(postApi(url, data, config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
