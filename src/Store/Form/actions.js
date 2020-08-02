import * as constants from "./constants";
import axios from "axios";

export const formOne = (fieldName, fieldValue) => ({
  type: constants.FORM_ONE,
  fieldName,
  fieldValue,
});

export const formTwo = (fieldName, fieldValue) => ({
  type: constants.FORM_TWO,
  fieldName,
  fieldValue,
});

export const simedisChange = (fieldName, fieldValue) => ({
  type: constants.SIMEDIS_CHANGE,
  fieldName,
  fieldValue,
});

export const simedisAccountChange = (fieldName, fieldValue) => ({
  type: constants.SIMEDIS_ACCOUNT,
  fieldName,
  fieldValue,
});

export const updateFormValidation = (fieldValue) => ({
  type: constants.VALIDATION,
  fieldValue,
});

export const updatePageLoad = (fieldValue) => ({
  type: constants.PAGE_LOAD,
  fieldValue,
});

export const updateFormType = (fieldValue) => ({
  type: constants.FORM_TYPE,
  fieldValue,
});

export const updateRegType = (fieldValue) => ({
  type: constants.REG_TYPE,
  fieldValue,
});

export const updateGender = (payload) => ({
  type: constants.GENDER,
  payload,
});

export const updateRelationship = (payload) => ({
  type: constants.RELATIONSHIP,
  payload,
});

export const updatePolicies = (payload) => ({
  type: constants.POLICIES,
  payload,
});

export const updateRegistrationType = (payload) => ({
  type: constants.REGISTRATION_TYPE,
  payload,
});

// export function
export const postApi = (url, data, config) => {
  return () => {
    const res = axios
      .post(url, data, config)
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        return error;
      });
    return res;
  };
};
