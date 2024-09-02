import { DRIVER_ID, DRIVER_INDEX, SEND_DRIVER_OUT, UPDATE_DRIVER } from "../constants/constants";

export const driverSelectedReducer = (state = { id: null }, action) => {
  switch (action.type) {
    case DRIVER_ID:
      return {
        ...state, id: action.payload
      }
    default:
      return state;
  }
}

export const activeDriverReducer = (state = {}, action) => {
  switch (action.type) {
    case DRIVER_INDEX:
      return { ...state, index: action.payload }
    default:
      return state;
  }
};

export const driverOutReducer = (state = [], action) => {
  switch (action.type) {
    case SEND_DRIVER_OUT:
      return [...state, action.payload]
    case UPDATE_DRIVER:
      return [...action.payload]
    default:
      return state;
  }
}
