import React from "react";
import "./MyCollabHeader.css";

const MyCollabHeader = ({ status }) => {
  const images = [
    "/profile/profile__pic.png",
    "/profile/profile__pic.png",
    "/profile/profile__pic.png",
    "/profile/profile__pic.png",
    "/profile/profile__pic.png",
    "/profile/profile__pic.png",
  ];

  const calculateImagesLeft = () => {
    const maxImages = 4;
    return images.length > maxImages ? images.length - maxImages : "";
  };

  return (
    <div className="mycollab__header__container">
      <div className="mycollab__header__left">
        {images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="User Profile"
            className="mycollab__header__image"
          />
        ))}
        {images.length > 4 && (
          <span className="mycollab__header__image__count">
            +{calculateImagesLeft()}
          </span>
        )}
      </div>
      <div className="mycollab__header__icons">
        <div
          className="mycollab__header__button"
          style={{
            backgroundColor: status === 0 ? "#C769FF" : "#64FF98",
            color: status === 0 ? "#64009F" : "#027A00",
          }}
        >
          {status === 0 ? "Activate" : "Completed"}
        </div>
        <img src="./archive-add.svg" alt="Add" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M13.68 5C13.68 3.9 12.78 3 11.68 3C10.58 3 9.67999 3.9 9.67999 5C9.67999 6.1 10.58 7 11.68 7C12.78 7 13.68 6.1 13.68 5Z"
            stroke="#292D32"
            stroke-width="1.5"
          />
          <path
            d="M13.68 19C13.68 17.9 12.78 17 11.68 17C10.58 17 9.67999 17.9 9.67999 19C9.67999 20.1 10.58 21 11.68 21C12.78 21 13.68 20.1 13.68 19Z"
            stroke="#292D32"
            stroke-width="1.5"
          />
          <path
            d="M13.68 12C13.68 10.9 12.78 10 11.68 10C10.58 10 9.67999 10.9 9.67999 12C9.67999 13.1 10.58 14 11.68 14C12.78 14 13.68 13.1 13.68 12Z"
            stroke="#292D32"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default MyCollabHeader;
