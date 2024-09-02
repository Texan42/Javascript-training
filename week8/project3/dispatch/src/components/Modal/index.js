import React from "react";
import "./style.css";
import DriverCard from "../DriverCard/index";
import { useTranslation } from "react-i18next";

const Modal = (props) => {
  const { t } = useTranslation();

  return (
    <div className={props.classes}>
      <div className={`modal-container`}>
        <div className="modal">
          <p className="x" onClick={props.handleClick}>
            X
          </p>
          <div className="drivers">
            {props.driverstate?.length ? (
              props.driverstate.map((driver) => (
                <DriverCard
                  id={driver._id}
                  driver={driver}
                  onClick={props.onClick}
                  key={driver._id}
                  first={driver.fName}
                  last={driver.lName}
                />
              ))
            ) : (
              <p className="text-center">{t("noDrivers")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
