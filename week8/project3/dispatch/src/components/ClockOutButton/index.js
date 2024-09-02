import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "../button";
import { t } from "i18next";

function handleLogout(instance) {
  instance.logoutPopup();
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const ClockOutButton = () => {
  let { instance } = useMsal();

  return (
    <Button
      variant="secondary"
      className="ml-auto"
      handleClick={() => handleLogout(instance)}
    >
      {t("Logout")}
    </Button>
  );
};
