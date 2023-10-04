import React from "react";
import './TrackCollab.css';
import { TiTick } from "react-icons/ti";

const TrackCollab = () => {
  const options = ['Collab Started', 'Requirement Submitted', 'Collab in progress', 'Review collab', 'Complete collab']

  return <div className="track__container">
    <h2 className="track__heading">Track Collab</h2>
    <div className="track-section">
      {options.map((option, index) => (
        <div key={index} className="track-option-container">
          <div className="track-option">
            <div className={`track-status ${index < 3 ? 'active' : 'inactive'}`} style={{backgroungColor: `{index < 3 ? #fff : #000}` }}>
              {index < 3 ? <TiTick /> : ''}
            </div>
            <p className="track__option">{option}</p>
          </div>
          {index < options.length - 1 && (
            <div className={`line ${index < 3 ? 'active' : 'inactive'}`}></div>
          )}
        </div>
      ))}
    </div>
  </div>;
};

export default TrackCollab;
