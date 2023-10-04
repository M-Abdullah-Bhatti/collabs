import "./ActivityHeader.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ActivityHeader = ({ showActivity, setShowActivity }) => {
  return (
    <div className="activity__header__container">
      <h1>Activities</h1>

      <div
        className="right__container"
        onClick={() => setShowActivity(!showActivity)}
      >
        {showActivity ? (
          <>
            <p>Hide</p>
            <IoIosArrowUp />
          </>
        ) : (
          <>
            <p>Show</p>
            <IoIosArrowDown />
          </>
        )}
      </div>
    </div>
  );
};

export default ActivityHeader;
