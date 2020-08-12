import { connect } from "react-redux";
import Finished from "../../../Pages/Finished";
import { getStates } from "../../../Store/Form/selectors";
// import { setupForm, saveForm } from "../../../Store/Form/thunk";
import { simedisChange, updatePageLoad } from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  states: getStates(state),
});

const mapDispatchToProps = (dispatch) => ({
  simedisChange: (fieldName, fieldValue) =>
    dispatch(simedisChange(fieldName, fieldValue)),
  updatePageLoad: (fieldValue) => dispatch(updatePageLoad(fieldValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Finished);
