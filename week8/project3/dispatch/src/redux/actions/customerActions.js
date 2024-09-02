import { CUSTOMER_ID, CUSTOMER_INDEX } from "../constants/constants"

export const customerSelected = (id) => {
    return {
        type: CUSTOMER_ID,
        payload: id
    }
}

export const activeCustomerAction = (idx) => (dispatch) => {
    dispatch({ type: CUSTOMER_INDEX, payload: idx });
}

