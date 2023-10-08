import React, { useState } from "react";
import "./CollabDetails.css";
import { collabData } from "../../../../data";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const CollabDetails = () => {
  const [showDetails, setShowDetails] = useState(true);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="collab__details__section">
      <div className="collab__details__header">
        <h2 className="collab__details__heading">Collab Details</h2>
        <p className="collab__details__toggle__button" onClick={toggleDetails}>
          {showDetails ? "Hide" : "Show"}
          {showDetails ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
      </div>

      {showDetails && (
        <>
          <div className="collab__activity__details">
            {collabData.map((data, index) => (
              <>
                <div key={index} className="collab__details__item" style={{flexDirection: data.title === "Revenue Distribution" && 'column'}}>
                  <div className="collab__details__label" style={{width: data.title === "Revenue Distribution" && '100%'}}>{data.title}</div>
                  { data.title === "Artists" ? 
                    <div>
                        {data.content.map((name, index) => (
                            <span key={name} className="collab__details__artists__name">
                            {name}
                            {index < data.content.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>
                    :
                    data.title === "Rating" ? 
                    <div className="collab__details__ratings">
                        {[...Array(data.content)].map((_, index) => (
                            <div key={index} className="svg__item">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00911 2.04748L9.03578 4.10081C9.17578 4.38664 9.54911 4.66081 9.86411 4.71331L11.7249 5.02248C12.9149 5.22081 13.1949 6.08414 12.3374 6.93581L10.8908 8.38248C10.6458 8.62748 10.5116 9.09998 10.5874 9.43831L11.0016 11.2291C11.3283 12.6466 10.5758 13.195 9.32161 12.4541L7.57745 11.4216C7.26245 11.235 6.74328 11.235 6.42245 11.4216L4.67828 12.4541C3.42995 13.195 2.67161 12.6408 2.99828 11.2291L3.41245 9.43831C3.48828 9.09998 3.35411 8.62748 3.10911 8.38248L1.66245 6.93581C0.81078 6.08414 1.08495 5.22081 2.27495 5.02248L4.13578 4.71331C4.44495 4.66081 4.81828 4.38664 4.95828 4.10081L5.98495 2.04748C6.54495 0.933311 7.45495 0.933311 8.00911 2.04748Z" fill="#FFE500"/>
                                </svg>
                            </div>
                        ))}
                    </div>
                    :
                    data.title !== "Revenue Distribution" ? 
                        <div className="collab__details__value">{data.content}</div>
                    :
                    data.content.map((activeData)=> (
                        <div className="collab__details__artists__container"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                        >
                            <div className="collab__details__value">{activeData.Artist}</div>
                            <div className="details__percent">{activeData.Percentage}%</div>
                        </div>
                    ))
                  }
                </div>
                <div className="collab__details__underline"></div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CollabDetails;
