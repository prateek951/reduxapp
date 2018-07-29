// 1. store and tab
// 2. Add to the imports from redux applyMiddleware and compose
// 3. Create initial state
// 4. Create a store and in middleware add redux-thunk

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//Create init state
const initState = {};

//Create the middleware
const middleware = [thunk];

//Create the store
const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
