import { DRIVER_ID, DRIVER_INDEX, SEND_DRIVER_OUT, UPDATE_DRIVER } from "../constants/constants"

export const driverSelected = (id) => {
    return {
        type: DRIVER_ID,
        payload: id
    }
}

export const activeDriverAction = (idx) => (dispatch) => {
    dispatch({ type: DRIVER_INDEX, payload: idx });
}

export const driverOutAction = (driverId, customerId, deliveryId) => (dispatch) => {
    dispatch({ type: SEND_DRIVER_OUT, payload: { driverId, customerId, deliveryId }, })
}

export const updateDriverOut = (driverArray) => (dispatch) => {
    dispatch({ type: UPDATE_DRIVER, payload: driverArray })
}
