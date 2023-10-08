import React from "react";
import "./TrackCollab.css";

const TrackCollab = () => {
  const options = [
    "Collab Started",
    "Requirement Submitted",
    "Collab in progress",
    "Review collab",
    "Complete collab",
  ];

  return (
    <div className="track__container">
      <h2 className="track__heading">Track Collab</h2>
      <div className="track-section">
        {options.map((option, index) => (
          <div key={index} className="track-option-container">
            <div className="track-option">
              <div
                className={`track-status ${index < 3 ? "active" : "inactive"}`}
              >
                {index < 3 ? <img src="/collab/tick.png" alt="logo" /> : ""}
                {/* {index < 3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                  >
                    <path
                      d="M1 4.33333L4.33333 7.66667L11 1"
                      stroke="black"
                      stroke-opacity="0.95"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  " "
                )} */}
              </div>
              <p className="track__option">{option}</p>
            </div>
            {index < options.length - 1 && (
              <div
                className={`line ${index < 3 ? "active" : "inactive"}`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackCollab;
