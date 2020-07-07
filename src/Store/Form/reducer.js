import { combineReducers } from "redux";
import * as constants from "./constants";
import moment from "moment";

const initialState = {
  state: {
    form_type: "",
    reg_type: "",
    is_loading: false,
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
      is_valid: true,
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
      enabled_payments: ["gopay"],
    },
    simedis: {
      bill_amount: "",
      bill_code: "",
      registration_code: "",
      payment_desc: "",
      payment_ref_code: "",
      paid_amount: "",
      transaction_date: "",
      payment_status: true,
    },
    simedis_account: {
      registration_code: "",
      username: "",
      password: "",
      password_retype: "",
      is_valid: "",
      customer_code: "",
      customer_name: "",
      registration_code: "",
      customer_status: "",
      active: "",
      token: "",
      insurance_type: "",
      member_no: "",
      policy_no: "",
      sum_insured_ajb: "",
      sum_insured_inpatient: "",
      ref_no: "",
      customer_policy_code: "",
      insurance_date_start: "10 Juli 2020",
      insurance_date_end: "10 September 2020",
      member_total: "1",
    },
    gender: [],
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
      return {
        ...state,
        personal: newForm,
      };
    case constants.ADD_SPOUSE:
      const spouseNew = { ...state.spouse };
      spouseNew[action.fieldName] = action.fieldValue;
      return {
        ...state,
        spouse: spouseNew,
      };
    case constants.SIMEDIS_CHANGE:
      const load = { ...state.simedis };
      load[action.fieldName] = action.fieldValue;
      return {
        ...state,
        simedis: load,
      };
    case constants.SIMEDIS_ACCOUNT:
      const payload = { ...state.simedis_account };
      payload[action.fieldName] = action.fieldValue;
      return {
        ...state,
        simedis_account: payload,
      };
    case constants.FORM_TYPE:
      return {
        ...state,
        form_type: action.fieldValue,
        status: constants.FORM_TYPE,
      };
    case constants.REG_TYPE:
      return {
        ...state,
        reg_type: action.fieldValue,
        status: constants.REG_TYPE,
      };
    case constants.PAGE_LOAD:
      return {
        ...state,
        is_loading: action.fieldValue,
        status: constants.PAGE_LOAD,
      };
    case constants.GENDER:
      return {
        ...state,
        gender: action.payload,
        status: constants.GENDER,
      };
    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer,
});
