import React from "react";
import "./ProfileDetails.css";
import ProfileSocials from "./ProfileSocials/ProfileSocials";
import ProfileSkills from "./ProfileSkills/ProfileSkills";
import ProfileOverview from "./ProfileOverview/ProfileOverview";

const ProfileDetails = () => {
  return (
    <div className="profile__details__container">
      <ProfileOverview />
      <ProfileSkills />
      <ProfileSocials />

      <div className="profile__foot">MEMBER SINCE : AUG 2, 2023</div>
    </div>
  );
};

export default ProfileDetails;
