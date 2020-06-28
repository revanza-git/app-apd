import * as constants from "./constants";
import axios from "axios";

export const addChange = (fieldName, fieldValue) => ({
  type: constants.ADD_CHANGE,
  fieldName,
  fieldValue,
});

export const personalChange = (fieldName, fieldValue) => ({
  type: constants.PERSONAL_CHANGE,
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
