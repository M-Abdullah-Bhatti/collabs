import { Link } from "react-router-dom";
import "./Header.css";

const navLinks = [
  {
    linkText: "Home",
    linkTo: "/",
  },
  {
    linkText: "Find Collabs",
    linkTo: "/collab",
  },
  {
    linkText: "Find Job",
    linkTo: "/",
  },
  {
    linkText: "Post Job",
    linkTo: "/",
  },

  {
    linkText: "Post Collabs",
    linkTo: "/",
  },
  {
    linkText: "How it works",
    linkTo: "/",
  },
];

const Header = () => {
  return (
    <div className="header__container">
      {/* Left */}
      <div className="left__container">
        <img src="/shared/header__logo.png" alt="logo" />
      </div>
      {/* Middle */}
      <div className="middle__container">
        {navLinks.map((item, index) => (
          <Link to={item.linkTo} key={index}>
            {item.linkText}
          </Link>
        ))}
      </div>
      {/* Right */}
      <div className="right__container">
        <img src="/shared/header__sms.png" alt="logo" />
        <img src="/shared/header__notification.png" alt="logo" />
        <img src="/shared/header__profile.png" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
