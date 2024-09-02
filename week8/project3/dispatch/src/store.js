import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import {
  activeDriverReducer,
  driverOutReducer,
  driverSelectedReducer,
} from "./redux/reducers/driverReducers";
import {
  activeCustomerReducer,
  customerSelectedReducer,
} from "./redux/reducers/customerReducers";

const initialState = {};

const reducer = combineReducers({
  driverSelected: driverSelectedReducer,
  customerSelected: customerSelectedReducer,
  activeCustomer: activeCustomerReducer,
  activeDriver: activeDriverReducer,
  driverOut: driverOutReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
