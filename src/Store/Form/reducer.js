import { combineReducers } from "redux";
import * as constants from "./constants";
import moment from "moment";

const initialState = {
  summary: {
    status: null,
    title: "",
    data: {
      user_name: "",
      user_gender: "",
      user_birth_date: moment(new Date()).format("YYYY-MM-DD"),
      user_age: "",
      user_occupation: "",
      user_phone_number: ""
    },
    changed: null,
  },
};

function viewReducer(state = initialState.summary, action) {
  switch (action.type) {
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        status: constants.EDIT_FORM_SUCCESS,
        data: action.form,
      };
    default:
      return state;
  }
}

function editReducer(state = initialState.summary, action) {
  switch (action.type) {
    case constants.ADD_CHANGE:
      const newForm = { ...state.data };
      newForm[action.fieldName] = action.fieldValue;
      return {
        ...state,
        change: false,
        data: newForm,
      };
    case constants.SET_UP_EDIT_FORM:
      return {
        ...state,
        changed: false,
        data: action.form,
      };
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        changed: true,
        data: action.form,
        status: constants.EDIT_FORM_SUCCESS,
      };
    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer,
});
