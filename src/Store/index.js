import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddlware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import formReducer from "./Form/reducer";

function configureStore(initialState) {
  const reducers = combineReducers({
    form: formReducer,
  });

  return createStore(
    reducers,
    initialState,
    // REDUX DEV TOOLS + THUNK EXTENSION ENABLER.
    composeWithDevTools(applyMiddleware(...[thunkMiddlware]))
  );
}

export default configureStore;
