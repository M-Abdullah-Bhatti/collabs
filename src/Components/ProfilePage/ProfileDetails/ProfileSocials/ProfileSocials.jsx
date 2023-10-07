import React from "react";
import "./ProfileSocials.css";
import { socialsData } from "../../../../data";

const ProfileSocials = () => {
  return (
    <div className="socials__container">
      <h2>Socials</h2>
      <div className="social-container">
        {socialsData.map((social, index) => (
          <div key={index} className="social__item">
            {/* <a href={social.link} target="_blank" rel="noopener noreferrer"> */}
            <div
              className="social__icon"
              style={{ backgroundColor: social.backgroundColor }}
            >
              <img
                className={`{social.icon}`}
                src={social.icon}
                alt="social-icon"
              />
            </div>
            <div className="social__title">{social.name}</div>
            {/* </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSocials;
