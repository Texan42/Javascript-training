import React from "react";
import "./scrollArrows.css";

const UpArrow = (props) => {
  return (
    <div className={`upArrow ${props.upVisible}`}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
};

export default UpArrow;
