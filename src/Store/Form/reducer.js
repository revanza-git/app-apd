import { combineReducers } from "redux";
import * as constants from "./constants";
import moment from "moment";

const initialState = {
  state: {
    form_type: "",
    personal: {
      first_name: "",
      last_name: "",
      gender: "",
      identification_number: "",
      birth_date: moment(new Date()).format("YYYY-MM-DD"),
      occupation: "",
      phone_number: "",
      email: "",
      form_status: "",
      is_valid: false,
    },
    spouse: {
      first_name: "",
      last_name: "",
      gender: "",
      identification_number: "",
      birth_date: moment(new Date()).format("YYYY-MM-DD"),
      occupation: "",
      phone_number: "",
      email: "",
      form_status: "",
      is_valid: true,
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
      const newForm = { ...state.personal };
      newForm[action.fieldName] = action.fieldValue;
      console.log(newForm);
      return {
        ...state,
        personal: newForm,
      };
    case constants.ADD_SPOUSE:
      const spouseNew = { ...state.spouse };
      spouseNew[action.fieldName] = action.fieldValue;
      console.log(spouseNew);
      return {
        ...state,
        spouse: spouseNew,
      };
    case constants.FORM_TYPE:
      return {
        ...state,
        form_type: action.fieldValue,
        status: constants.FORM_TYPE,
      };
    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer,
});
