import React from "react";
import "./scrollArrows.css";

const DownArrow = (props) => {
  return (
    <div className={`downArrow ${props.downVisible}`}>
      <i className="fas fa-chevron-down"></i>
    </div>
  );
};

export default DownArrow;
