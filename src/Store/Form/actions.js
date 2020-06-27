import * as constants from "./constants";

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
