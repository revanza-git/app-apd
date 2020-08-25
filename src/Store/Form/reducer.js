import { combineReducers } from "redux";
import * as constants from "./constants";
import moment from "moment";

const initialState = {
  state: {
    form_type: "",
    reg_type: "",
    app_code: "APP202007001",
    is_loading: false,
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
    simedis_payment: {
      registration_code: "",
      bill_amount: "",
      bill_code: "",
      payment_desc: "",
      payment_ref_code: "",
      paid_amount: "",
      transaction_date: "",
      payment_status: null,
      is_valid: null,
      form_status: "",
    },
    simedis_account: {
      registration_code: "",
      username: "",
      password: "",
      password_retype: "",
      customer_code: "",
      customer_name: "",
      customer_status: "",
      active: false,
      token: "",
      insurance_type: "",
      member_no: "",
      policy_no: "",
      sum_insured_ajb: "",
      sum_insured_inpatient: "",
      ref_no: "",
      customer_policy_code: "",
      insurance_period: "",
      member_total: "1",
      is_valid: null,
      form_status: "",
      base64: "",
    },
    gender: [],
    relationship: [],
    selected_relationship: [],
    forms: [],
    policies: [],
    registration_type: [],
    form_1: {
      relation_code: "0",
      full_name: "",
      gender: "",
      identification_number: "",
      birth_date: moment(new Date()).format("YYYY-MM-DD"),
      occupation: "",
      phone_number: "",
      email: "",
      form_status: "",
      is_valid: null,
    },
    form_2: {
      relation_code: "",
      full_name: "",
      gender: "",
      identification_number: "",
      birth_date: moment(new Date()).format("YYYY-MM-DD"),
      occupation: "",
      phone_number: "",
      email: "",
      form_status: "",
      is_valid: null,
    },
  },
};

function editReducer(state = initialState.state, action) {
  switch (action.type) {
    case constants.FORM_ONE:
      const newForm = { ...state.form_1 };
      newForm[action.fieldName] = action.fieldValue;
      return {
        ...state,
        form_1: newForm,
      };
    case constants.FORM_TWO:
      const partnerNew = { ...state.form_2 };
      partnerNew[action.fieldName] = action.fieldValue;
      return {
        ...state,
        form_2: partnerNew,
      };
    case constants.SIMEDIS_PAYMENT:
      const load = { ...state.simedis_payment };

      load[action.fieldName] = action.fieldValue;
      return {
        ...state,
        simedis_payment: load,
      };
    case constants.SIMEDIS_ACCOUNT:
      const payload = { ...state.simedis_account };
      payload[action.fieldName] = action.fieldValue;
      console.log(payload);
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
    case constants.RELATIONSHIP:
      return {
        ...state,
        relationship: action.payload,
        status: constants.RELATIONSHIP,
      };
    case constants.POLICIES:
      return {
        ...state,
        policies: action.payload,
        status: constants.POLICIES,
      };
    case constants.REGISTRATION_TYPE:
      return {
        ...state,
        registration_type: action.payload,
        status: constants.REGISTRATION_TYPE,
      };
    default:
      return state;
  }
}

export default combineReducers({
  edit: editReducer,
});
