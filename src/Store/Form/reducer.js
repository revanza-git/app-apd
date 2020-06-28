import { combineReducers } from "redux";
import * as constants from "./constants";
import moment from "moment";

const initialState = {
  state: {
    title: "",
    data: {
      personal_first_name: "",
      personal_last_name: "",
      personal_gender: "",
      personal_identification_number: "",
      personal_birth_date: moment(new Date()).format("YYYY-MM-DD"),
      personal_occupation: "",
      personal_phone_number: "",
      personal_email: "",
      personal_form_status: "",
    },
    midtrans_account: {
      api_url:
        "https://cors-anywhere.herokuapp.com/https://app.sandbox.midtrans.com/snap/v1/transactions",
      merchant_id: "G656498576",
      client_key: "SB-Mid-client-JvE0yhSIDGqF8h1M",
      server_key: "SB-Mid-server-rU0SDyct3zSoQo2s-0Yta4Qu",
      username: "",
      password: "",
      enabled_payments: ["credit_card", "gopay"],
    },
    status: null,
    changed: null,
    isValid: null,
  },
};

function viewReducer(state = initialState.state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function editReducer(state = initialState.state, action) {
  switch (action.type) {
    case constants.ADD_CHANGE:
      const newForm = { ...state.data };
      newForm[action.fieldName] = action.fieldValue;
      return {
        ...state,
        data: newForm,
      };
    case constants.VALIDATION:
      return {
        ...state,
        isValid: action.fieldValue,
        status: constants.VALIDATION,
      };
    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer,
});
