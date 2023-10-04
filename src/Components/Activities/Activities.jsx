import "./Activities.css";
import ActivityHeader from "./ActivityHeader/ActivityHeader";
import ActivityStatus from "./ActivityStatus/ActivityStatus";

const Activities = () => {
  return (
    <div className="activities__container">
      <ActivityHeader />

      {/* Main Container */}
      <div className="activities__main">
        <ActivityStatus title="ABC started the collab" date="Aug 24, 8.04 PM" />
      </div>
    </div>
  );
};

export default Activities;
