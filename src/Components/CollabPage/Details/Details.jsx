import React, { useState } from "react";
import "./Details.css";
import { activitiesData } from "../../../data";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Details = () => {
  const [showDetails, setShowDetails] = useState(true);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="details-section gap" style={{paddingBottom: !showDetails && 0}}>
      <div className="details__header">
        <h2 className="details-heading">Details</h2>
        <p className="toggle-button" onClick={toggleDetails}>
          {showDetails ? "Hide" : "Show"}
          {showDetails ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
      </div>

      {showDetails && (
        <>
          <div className="activity-details">
            {activitiesData.map((activity, index) => (
              <>
                <div key={index} className="detail-item">
                  <div className="detail-label">{activity.title}</div>
                  <div className="detail-value">{activity.content}</div>
                </div>
                <div className="underline"></div>
              </>
            ))}
          </div>
          <div className="">
            <div className="detail-label">Compensation</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
              }}
            >
              <div className="detail-value">Revenue Distribution</div>
              <div className="details__percent">60%</div>
            </div>
          </div>
          <div className="underline"></div>
          <div className="detail-item">
            <div className="detail-label">Collab ID</div>
            <div className="detail-value">#F093739032498234</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
