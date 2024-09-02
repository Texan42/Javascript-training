import Buttons from "../button";
import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  createTheme,
} from "@mui/material";
import Modal from "../Modal/index";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import "./style.css";
import {
  activeDriverAction,
  driverOutAction,
  driverSelected,
  updateDriverOut,
} from "../../redux/actions/driverActions";
import {
  activeCustomerAction,
  customerSelected,
} from "../../redux/actions/customerActions";
import LoginModal from "../LoginModal";

const Navbar = (props) => {
  //state
  const { t, i18n } = useTranslation();
  const [styles, setStyles] = useState("none");
  const [stylesOut, setStylesOut] = useState("none");
  const [stylesIn, setStylesIn] = useState("none");

  const dispatch = useDispatch();

  // selected driver, selected customer info, and out driver information
  const driver = useSelector((state) => state.driverSelected.id);
  const customer = useSelector((state) => state.customerSelected.customer);
  const outDriver = useSelector((state) => state.driverOut);
  // MUI
  const mdTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#ffa000",
      },
      secondary: {
        main: "#f96333",
      },
      highlight: {
        main: "#ffebee",
      },
    },
    typography: {},
  });

  // Helper functions- handlers
  // handle language change
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const clockDriverOut = (index, id) => {
    // create Driver array for filtering clocked out drivers
    const newArray = props.availableDrivers.filter((driver) => {
      if (id !== driver._id) {
        return driver;
      }
    });
    props.setAvailableDrivers(newArray);
    setStylesOut("none");
  };

  // Out to dispatch an event that saves a driver and delivery id to redux in an array with each index containing driver id and delivery id
  // Axios call to out delivery takes delivery id and driver id, date
  // if array is empty then don't do anything
  // IN seaerches through the array and if we find in array
  // clocking PIZZAS out for delivery
  const handleOut = async (index, id) => {
    // Update OUT time to delivery
    const response = await Axios.put(`http://${process.env.REACT_APP_BASE_URL}/fulfillment/v1/deliveries/out/${customer.deliveryId}`, {
      driverId: driver,
      outTime: Date.now()
    });

    if (response.status === 201) {
      // Dispatch event to store driver, customer info, and delivery id
      dispatch(driverOutAction(driver, customer._id, customer.deliveryId));
      // Filter driver going out for delivery from available drivers
      const driverArray = props.availableDrivers.filter((currentDriver) => {
        if (driver !== currentDriver._id) {
          return currentDriver;
        } else {
          const outdriverArr = [...props.outDrivers, currentDriver];
          props.setOutDrivers(outdriverArr);
        }
      });
      // Filter out the current order on left
      const customerArray = props.customerInfo.filter((currentCustomer) => {
        if (customer._id !== currentCustomer._id) {
          return currentCustomer;
        }
      });
      props.setCustomerInfo(customerArray, () => {
        localStorage.setItem("deliveries", JSON.stringify(props.customerInfo));
        if (!props.customerInfo.length) {
          localStorage.removeItem("deliveries");
        }
      }
      );
      props.setAvailableDrivers(driverArray);

      // Dispatch actions to clear selected driver and customer as well as active ones
      dispatch(driverSelected(null));
      dispatch(activeDriverAction(null));
      dispatch(customerSelected(null));
      dispatch(activeCustomerAction(null));
    } else {
      console.log("Out for delivery error")
    }
  };

  const handleIn = async (index, id) => {
    const delivery = outDriver.find((driver) => {
      if (id === driver.driverId) {
        return driver;
      }
    });
    const deliveryId = delivery.deliveryId;
    console.log(deliveryId);

    const response = await Axios.put(`http://${process.env.REACT_APP_BASE_URL}/fulfillment/v1/deliveries/in/${deliveryId}`, {
      inTime: Date.now()
    });

    if (response.status === 201) {
      const newArray = props.outDrivers.filter((driver) => {
        if (id === driver._id) {
          const newARR = [...props.availableDrivers, driver];
          props.setAvailableDrivers(newARR);
        } else {
          return driver;
        }
      });

      const driverRemoval = outDriver.filter((driver) => id !== driver.driverId);
      dispatch(updateDriverOut(driverRemoval));

      props.setOutDrivers(newArray);
      console.log(outDriver);
      setStylesIn("none");
    } else if (response.status > 299) {
      console.log("In from delivert error");
    }
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <nav className="nav">
        <div className="nav-buttons">
          <div className="left-nav">
            <Buttons handleClick={() => setStyles("block")}>
              {t("ClockIn")}
            </Buttons>
            <Buttons handleClick={() => setStylesOut("block")}>
              {t("ClockOut")}
            </Buttons>
          </div>

          <div className="center-nav">
            <FormControl
              color="secondary"
              variant="filled"
              sx={{ minWidth: 120 }}
            >
              <InputLabel
                color="highlight"
                id="demo-simple-select-filled-label"
              >
                Language
              </InputLabel>

              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                onChange={handleChange}
              >
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"sp"}>Spanish</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="right-nav">
            <Buttons
              handleClick={() => setStylesIn("block")}
              disabled={!props.outDrivers.length}
            >
              {t("IN")}
            </Buttons>
            <Buttons
              handleClick={() => handleOut()}
              disabled={!props.availableDrivers.length || !driver || !customer}
            >
              {/* {" "} */}
              {t("OUT")}
            </Buttons>
          </div>
        </div>

        {/*Login Modal in use*/}
        <LoginModal
          classes={styles}
          handleClick={() => setStyles("none")}
          availableDrivers={props.availableDrivers}
          setAvailableDrivers={props.setAvailableDrivers}
          setStyles={setStyles}
        />

        <Modal
          classes={stylesOut}
          handleClick={() => setStylesOut("none")}
          driverstate={props.availableDrivers}
          onClick={clockDriverOut}
        />

        <Modal
          classes={stylesIn}
          handleClick={() => setStylesIn("none")}
          driverstate={props.outDrivers}
          onClick={handleIn}
        />
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
