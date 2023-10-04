import "./Activities.css";
import ActivityHeader from "./ActivityHeader/ActivityHeader";

const Activities = () => {
  return (
    <div className="activities__container">
      <ActivityHeader />

      {/* Main Container */}
      <div className="activities__main"></div>
    </div>
  );
};

export default Activities;
