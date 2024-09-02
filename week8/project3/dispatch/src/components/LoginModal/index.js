import React from "react";
import "./style.css";
import Form from "../Form";

const LoginModal = (props) => {
  return (
    <div className={props.classes}>
      <div className={`login-modal-container`}>
        <div className="login-modal">
          <p className="x" onClick={props.handleClick}>
            X
          </p>
          <div className="drivers">
            <Form
              availableDrivers={props.availableDrivers}
              setAvailableDrivers={props.setAvailableDrivers}
              setStyles={props.setStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
