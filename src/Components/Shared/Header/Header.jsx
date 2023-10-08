import { Link } from "react-router-dom";
import "./Header.css";

const navLinks = [
  {
    linkText: "Find Artists",
    linkTo: "/find-artists",
  },
  {
    linkText: "Find Job",
    linkTo: "/find-job",
  },
  {
    linkText: "Post Job",
    linkTo: "/post-job",
  },
  {
    linkText: "Find Collabs",
    linkTo: "/find-collabs",
  },
  {
    linkText: "Post Collabs",
    linkTo: "/post-collabs",
  },
  {
    linkText: "How it works",
    linkTo: "/how-it-works",
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
