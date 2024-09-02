import { CUSTOMER_ID, CUSTOMER_INDEX } from "../constants/constants";

export const customerSelectedReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ID:
      return {
        ...state, customer: action.payload
      }
    default:
      return state
  }
}

export const activeCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_INDEX:
      return { ...state, index: action.payload }
    default: {
      return state;
    }
  }
}

export default customerSelectedReducer;