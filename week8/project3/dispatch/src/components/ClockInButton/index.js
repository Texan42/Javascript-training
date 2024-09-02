import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "../button";
import { loginRequest } from "../../Configs/authConfig";

const handleLogin = (instance) => {
  instance.loginPopup(loginRequest).catch((e) => {
    console.error(e);
  });
};

export const ClockInButton = () => {
  const { instance } = useMsal();
  return (
    <Button
      variant="secondary"
      className="ml-auto"
      handleClick={() => handleLogin(instance)}
    >
      Login
    </Button>
  );
};

export default ClockInButton;
