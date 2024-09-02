import React from "react";
import CustomerCard from "../CustomerCard/index";
import { useState } from "react";
import DownArrow from "../ScrollArrows/DownArrow";
import UpArrow from "../ScrollArrows/UpArrow";
import { useDispatch, useSelector } from "react-redux";
import { activeCustomerAction, customerSelected } from "../../redux/actions/customerActions";
import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./style.css";


const LeftPanel = (props) => {
  const dispatch = useDispatch();
  const [upVisible, setUpVisible] = useState("none");
  const [downVisible, setDownVisible] = useState("none");

  const { t } = useTranslation();

  const activeCustomer = useSelector(state => state.activeCustomer);
  const { index: customerIndex } = activeCustomer;

  const handleclick = (index, id) => {
    if (customerIndex !== index) {
      // Set selected customer object as well as index for styling
      dispatch(activeCustomerAction(index));
      dispatch(customerSelected(props.customerInfo[index]));
    } else {
      // Clear selected customer
      dispatch(activeCustomerAction(null));
      dispatch(customerSelected());
    }
  };

  // Scroll animations for arrows
  const handleScrollArrows = (e) => {
    if (e.target.scrollTop > 0) {
      setUpVisible("");
    } else {
      setUpVisible("hideArrow");
    }

    if (e.target.scrollHeight - Math.abs(e.target.scrollTop) === e.target.clientHeight) {
      setDownVisible("hideArrow");
    } else {
      setDownVisible("");
    }
  }

  return (
    <>
      <section className="customer-panel" onScroll={(e) => handleScrollArrows(e)}>
        <UpArrow upVisible={upVisible} />
        {props.customerInfo?.length ? (
          props.customerInfo.map((customer, index) => (
            <Paper
              variant="outlined"
              style={{
                backgroundColor: "#F3F0F0",
              }}
            >
              <CustomerCard
                selectClass={`${customerIndex === index ? "active" : ""}`}
                index={index}
                key={customer._id}
                phone={customer.Phone}
                name={customer.fName + " " + customer.lName}
                address={customer.address}
                onClick={handleclick}
              />
            </Paper>
          ))
        ) : (
          <p className="text-center">{t("noCustomers")}</p>
        )}
        <DownArrow downVisible={downVisible} />
      </section>
    </>
  );
};

export default LeftPanel;
