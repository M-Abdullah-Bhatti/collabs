import React from "react";
import "./ProfileOverview.css";

const ProfileOverview = () => {
  const rating = 5;

  return (
    <div className="profile__overview">
      <div className="profile__overview__image">
        <img src="/profile/profile__pic.png" alt="Profile" />
      </div>
      <div className="profile__overview__info">
        <div className="profile__overview__name">
          <h2>Sean Kim</h2>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.56 10.74L20.2 9.16C19.94 8.86 19.73 8.3 19.73 7.9V6.2C19.73 5.14 18.86 4.27 17.8 4.27H16.1C15.71 4.27 15.14 4.06 14.84 3.8L13.26 2.44C12.57 1.85 11.44 1.85 10.74 2.44L9.17 3.81C8.87 4.06 8.3 4.27 7.91 4.27H6.18C5.12 4.27 4.25 5.14 4.25 6.2V7.91C4.25 8.3 4.04 8.86 3.79 9.16L2.44 10.75C1.86 11.44 1.86 12.56 2.44 13.25L3.79 14.84C4.04 15.14 4.25 15.7 4.25 16.09V17.8C4.25 18.86 5.12 19.73 6.18 19.73H7.91C8.3 19.73 8.87 19.94 9.17 20.2L10.75 21.56C11.44 22.15 12.57 22.15 13.27 21.56L14.85 20.2C15.15 19.94 15.71 19.73 16.11 19.73H17.81C18.87 19.73 19.74 18.86 19.74 17.8V16.1C19.74 15.71 19.95 15.14 20.21 14.84L21.57 13.26C22.15 12.57 22.15 11.43 21.56 10.74ZM16.16 10.11L11.33 14.94C11.19 15.08 11 15.16 10.8 15.16C10.6 15.16 10.41 15.08 10.27 14.94L7.85 12.52C7.56 12.23 7.56 11.75 7.85 11.46C8.14 11.17 8.62 11.17 8.91 11.46L10.8 13.35L15.1 9.05C15.39 8.76 15.87 8.76 16.16 9.05C16.45 9.34 16.45 9.82 16.16 10.11Z"
              fill="#007BE4"
            />
          </svg>
        </div>
        <div className="profile__overview__username">
          <p>@asadjanam019 | Pakistan (GMT+5)</p>
        </div>
        <div className="profile__overview__ratings">
          {[...Array(rating)].map((_, index) => (
            <div key={index} className="svg__item">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00911 2.04748L9.03578 4.10081C9.17578 4.38664 9.54911 4.66081 9.86411 4.71331L11.7249 5.02248C12.9149 5.22081 13.1949 6.08414 12.3374 6.93581L10.8908 8.38248C10.6458 8.62748 10.5116 9.09998 10.5874 9.43831L11.0016 11.2291C11.3283 12.6466 10.5758 13.195 9.32161 12.4541L7.57745 11.4216C7.26245 11.235 6.74328 11.235 6.42245 11.4216L4.67828 12.4541C3.42995 13.195 2.67161 12.6408 2.99828 11.2291L3.41245 9.43831C3.48828 9.09998 3.35411 8.62748 3.10911 8.38248L1.66245 6.93581C0.81078 6.08414 1.08495 5.22081 2.27495 5.02248L4.13578 4.71331C4.44495 4.66081 4.81828 4.38664 4.95828 4.10081L5.98495 2.04748C6.54495 0.933311 7.45495 0.933311 8.00911 2.04748Z"
                  fill="#FFE500"
                />
              </svg>
            </div>
          ))}
          <span>5 (124)</span>
        </div>
        <div className="profile__other__info">
          <div className="profile__info">
            <span style={{ backgroundColor: "#31AFD4" }}>
              Musicians Connected
            </span>
            <span style={{ backgroundColor: "#A8D5E2" }}>23</span>
          </div>
          <div className="profile__info">
            <span style={{ backgroundColor: "#00DFCD" }}>Project Done</span>
            <span style={{ backgroundColor: "#B1EDE8" }}>47</span>
          </div>
        </div>
        <p style={{ marginTop: "20px" }}>
          I am a musician and songwriter, deeply passionate about creating
          soul-stirring melodies. Music has always been my canvas for
          self-expression and storytelling. Join me on this journey as I share
          my love for music and connect with hearts worldwide.
        </p>
      </div>
    </div>
  );
};

export default ProfileOverview;
