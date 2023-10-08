import { useState } from "react";
import "./ProfileTabs.css";
import MyCollabs from "./MyCollabs/MyCollabs";
import MyPosts from "./MyPosts/MyPosts";
import MyMusic from "./MyMusic/MyMusic";

const ProfileTabs = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="section__with__options">
      <div className="profile__tabs__options">
        <div
          className={`profile__tabs__option ${
            selectedOption === 1 ? "profile__tabs__selected" : ""
          }`}
          onClick={() => handleOptionClick(1)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49996 18.3334H12.5C16.6666 18.3334 18.3333 16.6667 18.3333 12.5V7.50002C18.3333 3.33335 16.6666 1.66669 12.5 1.66669H7.49996C3.33329 1.66669 1.66663 3.33335 1.66663 7.50002V12.5C1.66663 16.6667 3.33329 18.3334 7.49996 18.3334Z"
              stroke={selectedOption === 1 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.50004 8.33333C8.42052 8.33333 9.16671 7.58714 9.16671 6.66667C9.16671 5.74619 8.42052 5 7.50004 5C6.57957 5 5.83337 5.74619 5.83337 6.66667C5.83337 7.58714 6.57957 8.33333 7.50004 8.33333Z"
              stroke={selectedOption === 1 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.22498 15.7917L6.33331 13.0333C6.99164 12.5917 7.94164 12.6417 8.53331 13.15L8.80831 13.3917C9.45831 13.95 10.5083 13.95 11.1583 13.3917L14.625 10.4167C15.275 9.85834 16.325 9.85834 16.975 10.4167L18.3333 11.5833"
              stroke={selectedOption === 1 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>My Posts</p>
        </div>
        <hr className="vertical__line" />
        <div
          className={`profile__tabs__option ${
            selectedOption === 2 ? "profile__tabs__selected" : ""
          }`}
          onClick={() => handleOptionClick(2)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.2333 18.3334C6.66924 18.3334 7.8333 17.1693 7.8333 15.7334C7.8333 14.2974 6.66924 13.1334 5.2333 13.1334C3.79736 13.1334 2.6333 14.2974 2.6333 15.7334C2.6333 17.1693 3.79736 18.3334 5.2333 18.3334Z"
              stroke={selectedOption === 2 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3667 14V3.83335C17.3667 1.66668 16.0084 1.36668 14.6334 1.74168L9.43337 3.15835C8.48337 3.41668 7.83337 4.16668 7.83337 5.25002V7.05835V8.27502V15.725"
              stroke={selectedOption === 2 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.7666 16.6C16.2026 16.6 17.3666 15.436 17.3666 14C17.3666 12.5641 16.2026 11.4 14.7666 11.4C13.3307 11.4 12.1666 12.5641 12.1666 14C12.1666 15.436 13.3307 16.6 14.7666 16.6Z"
              stroke={selectedOption === 2 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.83337 7.93331L17.3667 5.33331"
              stroke={selectedOption === 2 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>My Music</p>
        </div>
        <hr className="vertical__line" />
        <div
          className={`profile__tabs__option ${
            selectedOption === 3 ? "profile__tabs__selected" : ""
          }`}
          onClick={() => handleOptionClick(3)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 7.50002C15.8333 8.70835 15.475 9.8167 14.8583 10.7417C13.9583 12.075 12.5333 13.0167 10.875 13.2584C10.5916 13.3084 10.3 13.3334 9.99996 13.3334C9.69996 13.3334 9.40829 13.3084 9.12496 13.2584C7.46663 13.0167 6.04163 12.075 5.14163 10.7417C4.52496 9.8167 4.16663 8.70835 4.16663 7.50002C4.16663 4.27502 6.77496 1.66669 9.99996 1.66669C13.225 1.66669 15.8333 4.27502 15.8333 7.50002Z"
              stroke={selectedOption === 3 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.7084 15.3917L16.3334 15.7167C16.025 15.7917 15.7834 16.025 15.7167 16.3333L15.425 17.5583C15.2667 18.225 14.4167 18.425 13.975 17.9L10 13.3333L6.02503 17.9083C5.58336 18.4333 4.73336 18.2333 4.57502 17.5667L4.28336 16.3417C4.20836 16.0333 3.96669 15.7917 3.66669 15.725L2.29169 15.4C1.65836 15.25 1.43336 14.4583 1.89169 14L5.14169 10.75C6.04169 12.0833 7.46669 13.025 9.12503 13.2667C9.40836 13.3167 9.70003 13.3417 10 13.3417C10.3 13.3417 10.5917 13.3167 10.875 13.2667C12.5334 13.025 13.9584 12.0833 14.8584 10.75L18.1084 14C18.5667 14.45 18.3417 15.2417 17.7084 15.3917Z"
              stroke={selectedOption === 3 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4834 4.98331L10.9751 5.96664C11.0417 6.09997 11.2167 6.23331 11.3751 6.25831L12.2667 6.40831C12.8334 6.49997 12.9667 6.91664 12.5584 7.32498L11.8667 8.01663C11.7501 8.1333 11.6834 8.35831 11.7251 8.52498L11.9251 9.38331C12.0834 10.0583 11.7251 10.325 11.1251 9.96663L10.2917 9.47497C10.1417 9.3833 9.89173 9.3833 9.74173 9.47497L8.90839 9.96663C8.30839 10.3166 7.95006 10.0583 8.10839 9.38331L8.30839 8.52498C8.34173 8.36665 8.28339 8.1333 8.16673 8.01663L7.47506 7.32498C7.06673 6.91664 7.20006 6.50831 7.76673 6.40831L8.65839 6.25831C8.80839 6.23331 8.98339 6.09997 9.05006 5.96664L9.54173 4.98331C9.78339 4.44998 10.2167 4.44998 10.4834 4.98331Z"
              stroke={selectedOption === 3 ? "#000" : "#717171"}
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>My Collabs</p>
        </div>
      </div>
      {/* <hr
        className={`horizontal__line ${
          selectedOption === 1 ? "selected-line" : ""
        }`}
      /> */}
      <div className="content">
        {selectedOption === 1 && <MyPosts />}
        {selectedOption === 2 && <MyMusic />}
        {selectedOption === 3 && <MyCollabs />}
      </div>
    </div>
  );
};

export default ProfileTabs;
