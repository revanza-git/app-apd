import * as constants from "./constants";
import axios from "axios";

export const addChange = (fieldName, fieldValue) => ({
  type: constants.ADD_CHANGE,
  fieldName,
  fieldValue,
});

export const addSpouse = (fieldName, fieldValue) => ({
  type: constants.ADD_SPOUSE,
  fieldName,
  fieldValue,
});

export const personalChange = (fieldName, fieldValue) => ({
  type: constants.PERSONAL_CHANGE,
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
