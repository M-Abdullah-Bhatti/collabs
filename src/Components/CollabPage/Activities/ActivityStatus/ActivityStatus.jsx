import "./ActivityStatus.css";

const ActivityStatus = ({ title, date }) => {
  return (
    <div className="activity__status__container">
      <div className="title">
        <p>{title}</p>
      </div>
      <p className="date">{date}</p>
    </div>
  );
};

export default ActivityStatus;
