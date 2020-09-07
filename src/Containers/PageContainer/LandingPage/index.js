import { connect } from "react-redux";
import Landing from "../../../Pages/Landing";
// import { getStates } from "../../../Store/Form/selectors";
// import { setupForm, saveForm } from "../../../Store/Form/thunk";
// import { addChange } from "../../../Store/Form/actions";

// const mapStateToProps = (state) => ({
//   states: getStates(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   addChange: (fieldName, fieldValue) =>
//     dispatch(addChange(fieldName, fieldValue)),
//   discardChanges: () => dispatch(setupForm()),
//   saveChanges: () => dispatch(saveForm()),
//   setUpEditableForm: () => dispatch(setupForm()),
// });

export default connect()(Landing);
