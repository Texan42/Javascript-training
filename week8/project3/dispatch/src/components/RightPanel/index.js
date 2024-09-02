import React, { useState } from "react";
import DriverCard from "../DriverCard";
import { useDispatch, useSelector } from "react-redux";
import { activeDriverAction, driverSelected } from "../../redux/actions/driverActions";
import UpArrow from "../ScrollArrows/UpArrow";
import DownArrow from "../ScrollArrows/DownArrow";
import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./style.css";

const RightPanel = (props) => {
  //Save State
  const dispatch = useDispatch();
  const activeDriver = useSelector(state => state.activeDriver);
  const { index: driverIndex } = activeDriver;

  const { t } = useTranslation();

  // state for rendering scroll arrow
  const [upVisible, setUpVisible] = useState("none");
  const [downVisible, setDownVisible] = useState("none");

  // Scroll animations
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

  const handleOnClick = (index, id) => {
    if (driverIndex !== index) {
      // Dispatch events to select driver id and the index of selected card
      dispatch(driverSelected(id));
      dispatch(activeDriverAction(index));
    } else {
      // Clear selection if clicked again
      dispatch(activeDriverAction(null));
      dispatch(driverSelected());
    }
  }; //event handler for when driver card is clicked

  return (
    <section className="driver-panel" onScroll={(e) => handleScrollArrows(e)}>
      <UpArrow upVisible={upVisible} />
      {props.availableDrivers?.length ? (
        props.availableDrivers.map((driver, index) => (
          <Paper
            variant="outlined"
            style={{
              backgroundColor: "#F3F0F0",
            }}
          >

            <DriverCard
              key={driver._id}
              index={index}
              id={driver._id}
              first={driver.fName}
              last={driver.lName}
              classNameProp={` ${driverIndex === index ? "active" : ""}`}
              onClick={handleOnClick}
            />
          </Paper>
        ))
      ) : (
        <Paper
          elevation={7}
          style={{
            backgroundColor: "#F3F0F0",
          }}
        >
          <p className="text-center pb-3">{t("noDrivers")}</p>
        </Paper>
      )}
      <DownArrow downVisible={downVisible} />
    </section>
  );
};

export default RightPanel;
