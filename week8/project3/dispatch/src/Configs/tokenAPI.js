import axios from "axios";

export const driverLogin = async (pin) => {
  return await axios.get(
    `http://${process.env.REACT_APP_BASE_URL}/fulfillment/v1/drivers/${pin}`
  );
};
