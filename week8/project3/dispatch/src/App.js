import "./App.css";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import React, { useState, useEffect, useRef } from "react";
import MapWrapper from "./components/Map/wrapper";
import axios from "axios";

function App() {
  // intial Driver State for Available Drivers
  // initial Driver State for drivers out on delivery
  const [availableDrivers, setAvailableDrivers] = useState([]);
  const [outDrivers, setOutDrivers] = useState([]);

  // initial customer State
  const [customerInfo, setCustomerInfo] = useState([]);

  // Check if customerInfo is empty and localstorage isnt (Cache orders incase of a refresh or something)
  useEffect(() => {
    if (!customerInfo.length && localStorage.getItem("deliveries")) {
      setCustomerInfo(JSON.parse(localStorage.getItem("deliveries")));
    }
  }, [customerInfo]);

  function OrderAPI() {
    let currentDeliveryIds = [];
    if (customerInfo.length) {
      for (const customer of customerInfo) {
        currentDeliveryIds.push(customer.deliveryId);
      }
    }

    let currentDelivery = [];
    axios
      .post(`http://${process.env.REACT_APP_BASE_URL}/fulfillment/v1/deliveries/recent`, { deliveries: currentDeliveryIds })
      .then((response) => {
        response.data.forEach((deliveryInfo) => {
          let current = deliveryInfo.customerId;
          axios
            .get(`http://${process.env.REACT_APP_BASE_URL}/customers/v1/id/` + current)
            .then((response) => {
              response.data["deliveryId"] = deliveryInfo._id;
              currentDelivery.push(response.data);
            })
            .catch((err) => {
              // Handle Error Here
              console.error(err + ":Unable to retrieve customer info");
            });
        });
      })
      .catch((err) => {
        console.error(err + ": Unable To Get delivery info");
      });

    useInterval(() => {
      // Set new customer info and then add to localstorage
      setCustomerInfo([...customerInfo, ...currentDelivery], () =>
        localStorage.setItem("deliveries", JSON.stringify(customerInfo))
      );
    }, 15000);
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  OrderAPI();

  return (
    <>
      <div className="App">
        {/* Nav buttons here */}
        <Navbar
          availableDrivers={availableDrivers}
          setAvailableDrivers={setAvailableDrivers}
          outDrivers={outDrivers}
          setOutDrivers={setOutDrivers}
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
        />

        {/* Customer card panel */}
        <LeftPanel customerInfo={customerInfo} />

        {/* Map goes here */}
        <section className="map">
          <MapWrapper />
        </section>

        {/* Driver cardf panel */}
        <RightPanel
          availableDrivers={availableDrivers}
          outDrivers={outDrivers}
        />
      </div>
    </>
  );
}

export default App;
