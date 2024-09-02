import React from "react";
import "./style.css";

const DriverCard = (props) => {
  return (
    <div
      className={`driver-card ${props.classNameProp}`}
      onClick={() => props.onClick(props.index, props.id)}
    >
      <p>
        {props.first} {props.last}
      </p>
    </div>
  );
};

export default DriverCard;