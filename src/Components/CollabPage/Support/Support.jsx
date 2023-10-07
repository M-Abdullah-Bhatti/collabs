import React from "react";
import "./Support.css";
import { IoIosArrowForward } from "react-icons/io";

const Support = () => {
  return (
    <div className="support__container">
      <h2 className="support__heading">Support</h2>
      <div className="support__wrapper">
        <div className="support__row">
          <div>
            <h3 className="support__label">Open Dispute</h3>
            <p className="support__value">Got any problem with collab?</p>
          </div>
          <IoIosArrowForward color="#717171" />
        </div>
        <div className="underline"></div>
        <div className="support__row">
          <div>
            <h3 className="support__label">Extend Delivery Date</h3>
            <p className="support__value">Need more time to complete work?</p>
          </div>
          <IoIosArrowForward color="#717171" />
        </div>
        <div className="underline"></div>
        <div className="support__row">
          <div>
            <h3 className="support__label">FAQs</h3>
            <p className="support__value">Need some answers?</p>
          </div>
          <IoIosArrowForward color="#717171" />
        </div>
      </div>
    </div>
  );
};

export default Support;
