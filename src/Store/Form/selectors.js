export function getFormView(state) {
  return state.form.view.data;
}

export function getFormEdit(state) {
  return state.form.edit.data;
}

export function getHasChanged(state) {
  return state.form.edit.changed;
}
