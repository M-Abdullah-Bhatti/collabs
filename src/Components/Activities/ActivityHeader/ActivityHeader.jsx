import "./ActivityHeader.css";
import { IoIosArrowUp } from "react-icons/io";

const ActivityHeader = () => {
  return (
    <div className="activity__header__container">
      <h1>Activities</h1>

      <div className="right__container">
        <p>Hide</p>
        <IoIosArrowUp />
      </div>
    </div>
  );
};

export default ActivityHeader;
