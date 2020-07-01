export function getFormView(state) {
  return state.form.view.data;
}

export function getStates(state) {
  return state.form.edit;
}

export function getHasChanged(state) {
  return state.form.edit.changed;
}

// export function getPersonalFormValid(state) {
//   return state.form.edit.personal.is_valid;
// }

// export function getSpouseFormValid(state) {
//   return state.form.edit.spouse.is_valid;
// }
