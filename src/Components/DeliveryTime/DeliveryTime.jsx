import React from "react";
import './DeliveryTime.css'

const DeliveryTime = () => {
  
  const days = 5;
  const hours = 22;
  const minutes = 18;
  const seconds = '00';

  return <div className="delivery-time-section">
  <h2 className="delivery-time-heading">Delivery Time</h2>
  <div className="delivery-time">
    <div className="time-segment">
      <div className="time-value">{days}</div>
      <div className="time-label">Days</div>
    </div>
    <p className="helper">:</p>
    <div className="time-segment">
      <div className="time-value">{hours}</div>
      <div className="time-label">Hours</div>
    </div>
    <p className="helper">:</p>
    <div className="time-segment">
      <div className="time-value">{minutes}</div>
      <div className="time-label">Minutes</div>
    </div>
    <p className="helper">:</p>
    <div className="time-segment">
      <div className="time-value">{seconds}</div>
      <div className="time-label">Seconds</div>
    </div>
  </div>
</div>;
};

export default DeliveryTime;
