export function getFormView(state) {
  return state.form.view.data;
}

export function getStates(state) {
  return state.form.edit;
}

export function getHasChanged(state) {
  return state.form.edit.changed;
}

export function getIsValid(state) {
  return state.form.edit.isValid;
}
