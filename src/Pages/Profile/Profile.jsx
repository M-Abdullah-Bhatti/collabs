// import ProfileDetails from "../../Components/ProfilePage/ProfileDetails/ProfileDetails";
// import ProfileTabs from "../../Components/ProfilePage/ProfileTabs/ProfileTabs";
// import "./Profile.css";

// const Profile = () => {
//   return (
//     <div className="profile__container__main">
//       {/* Profile Main */}
//       <div className="profile__main">
//         {/* Cover Photo Container */}
//         <div className="cover__photo">
//           <div className="profile__main__container">
//             <div className="profile__main__left">
//               <ProfileDetails />
//             </div>
//             <div className="profile__main__right">
//               <ProfileTabs />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Something Else */}
//       <div className="something__else"></div>
//     </div>
//   );
// };

// export default Profile;

// =============

import ProfileDetails from "../../Components/ProfilePage/ProfileDetails/ProfileDetails";
import ProfileTabs from "../../Components/ProfilePage/ProfileTabs/ProfileTabs";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile__container__main">
      {/* Profile Main */}
      <div className="profile__main">
        {/* Cover Photo Container */}
        <div className="cover__photo"> </div>
        <div className="profile__main__container">
          <div className="profile__main__left">
            <ProfileDetails />
          </div>
          <div className="profile__main__right">
            <ProfileTabs />
          </div>
        </div>
      </div>

      {/* Something Else */}
      <div className="something__else"></div>
    </div>
  );
};

export default Profile;
