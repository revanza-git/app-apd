import * as constants from "./constants";
import axios from "axios";

export const addChange = (fieldName, fieldValue) => ({
  type: constants.ADD_CHANGE,
  fieldName,
  fieldValue,
});

export const setNewEditableForm = (form) => ({
  type: constants.SET_UP_EDIT_FORM,
  form,
});

export const editFormPending = () => ({
  type: constants.EDIT_FORM_PENDING,
});

export const editFormSuccess = (form) => ({
  type: constants.EDIT_FORM_SUCCESS,
  form,
});

export const updateFormTitle = (fieldName, fieldValue) => ({
  type: constants.UPDATE_FORM_TITLE,
  fieldName,
  fieldValue,
});

export const updateFormValidation = (fieldValue) => ({
  type: constants.VALIDATION,
  fieldValue,
});

// export function
export const submitToMidtrans = (url, data, config) => {
  return () => {
    axios
      .post(url, data, config)
      .then(({ response }) => {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
// export function submitToMidtrans(url, data, config) {
//   return function (url, data, config) {
//     return axios
//       .post(url, data, config)
//       .then(({ response }) => {
//         return response;
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// }
