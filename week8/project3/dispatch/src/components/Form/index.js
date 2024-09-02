import React, { useState } from "react";
import { driverLogin } from "../../Configs/tokenAPI";
import Button from "../button";
import "./style.css";
import { useTranslation } from "react-i18next";

const Form = (props) => {
  const { t } = useTranslation();
  const [pin, setPin] = useState();
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (pin) {
      //axios request
      const response = await driverLogin(pin);
      if (response.status === 200) {
        // Check if driver already logged in
        // If already logged in setError and return
        for (const driver of props.availableDrivers) {
          if (driver._id === response.data._id) {
            setError("Driver already logged in");
            return;
          }
        }

        // If not logged in, add new driver to state and set new state
        const currentDriver = [...props.availableDrivers];
        currentDriver.push(response.data);
        props.setAvailableDrivers(currentDriver);
        props.setStyles("none");
        // Clear pin number
        setPin();
      } else {
        setError("Failed to Clock in");
      }
    }
  };

  return (
    <div className="form-container">
      <form>
        <div className="driver-label-container text-center">
          <label>{t("DriverLogin")}</label>
        </div>
        <div className="driver-input-container">
          <input
            className="pin-input"
            id="pin"
            type="password"
            value={pin}
            placeholder={t("EnterPin")}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>

        <div className="driver-button-container text-center">
          <Button handleClick={onSubmit}>{t("Login")}</Button>
        </div>
        <div className="error">{error}</div>
      </form>
    </div>
  );
};

export default Form;
