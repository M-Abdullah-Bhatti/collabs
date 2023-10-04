import "./Feedback.css";
import { RxDownload } from "react-icons/rx";

const Feedback = ({ message, date }) => {
  return (
    <div className="feedback__container">
      {/* feedback__header */}
      <div className="feedback__header">
        <div className="logo">
          <div>
            <img src="./feedback__star.png" alt="logo" />
          </div>
          <h3>Feedback </h3>
        </div>
        <p className="date">{date}</p>
      </div>

      {/* feedback__body */}
      <div className="feedback__body">
        <p className="message">{message}</p>
        <div className="overall">
          <p>Overall</p>
          <div>
            <img src="./star__feedback.png" alt="logo" />
            <img src="./star__feedback.png" alt="logo" />
            <img src="./star__feedback.png" alt="logo" />
            <img src="./star__feedback.png" alt="logo" />
            <img src="./star__feedback.png" alt="logo" />
            <p>5</p>
          </div>
        </div>
        <hr />
        {/* btns__container */}
        <div className="ratings__container">
          <div className="rating">
            <p>Communication</p>
            <div>
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <p>5</p>
            </div>
          </div>
          <div className="rating">
            <p>Service</p>
            <div>
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <p>5</p>
            </div>
          </div>
          <div className="rating">
            <p>Recommend</p>
            <div>
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <img src="./star__feedback.png" alt="logo" />
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
