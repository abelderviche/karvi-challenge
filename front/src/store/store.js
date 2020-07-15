import { createStore ,applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk';
import carsReducer from "./reducers/carsReducer";
import citiesReducer from "./reducers/citiesReducer";

export default createStore(
  combineReducers({
    carsReducer:carsReducer,
    citiesReducer:citiesReducer}),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
    applyMiddleware(thunk)
  )
  
);
