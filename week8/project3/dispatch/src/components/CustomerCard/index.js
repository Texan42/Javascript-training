import React, { useState, useEffect } from "react";
import "./style.css";

const CustomerCard = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [warningState, setWarningState] = useState(0);
  const [startingTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const current = Date.now();
      const currentSeconds = Math.floor(current / 1000);
      setSeconds(currentSeconds - Math.floor(startingTime / 1000));
    }, 1000);

    ((Math.floor(seconds) / 60) >= 17)
      ? ((Math.floor(seconds) / 60) >= 30)
        ? setWarningState("warning")
        : setWarningState("watch")
      : setWarningState("");

    return () => clearInterval(interval)
  }, [seconds, startingTime]);

  return (
    <div className={`customerCardContainer ${props.selectClass}`}
      onClick={() => props.onClick(props.index, props.id)}>
      <p>{props.name}</p>
      <p>{props.phone}</p>
      <p>{props.address.street1}</p>
      <p>{`${props.address.city}, ${props.address.state}, ${props.address.zip}`}</p>
      <p>{props.address.deliveryInstructions}</p>

      <div className={`timer ${warningState}`}>
        <span className="minutes">{Math.floor(seconds / 60)}</span><span>:</span><span className="seconds">{(seconds % 60) < 10 ? `0${seconds % 60}` : seconds % 60}</span>
      </div>
    </div>
  );
};

export default CustomerCard;
