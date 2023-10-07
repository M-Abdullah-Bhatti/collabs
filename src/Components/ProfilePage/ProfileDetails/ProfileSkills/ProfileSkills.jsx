import React from "react";
import "./ProfileSkills.css";
import { skillsData } from "../../../../data";

const ProfileSkills = () => {
  return (
    <div className="profile__skills__container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <span key={index} className="skill__item">
            {skill}
          </span>
        ))}
      </div>

      <div className="skills__buttons__container">
        <div className="skills__button" style={{ backgroundColor: "#FFE500", border: 'none', flexGrow: 1, textAlign: 'center' }}>
          Let's Collab
        </div>
        <div className="skills__button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 8H17"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 13H13"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="skills__button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
              stroke="#292D32"
              stroke-width="1.5"
            />
            <path
              d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
              stroke="#292D32"
              stroke-width="1.5"
            />
            <path
              d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
              stroke="#292D32"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkills;
