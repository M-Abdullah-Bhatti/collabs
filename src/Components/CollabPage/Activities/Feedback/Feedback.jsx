import "./Feedback.css";

const Feedback = ({ message, date }) => {
  return (
    <div className="feedback__container">
      {/* feedback__header */}
      <div className="feedback__header">
        <div className="logo">
          <div>
            <img src="/collab/feedback__star.png" alt="logo" />
          </div>
          <h3>Feedback </h3>
        </div>
        <p className="date">{date}</p>
      </div>

      {/* feedback__body */}
      <div className="feedback__body">
        <p className="message">{message}</p>
        <div className="overall">
          <p className="overall__para">Overall</p>
          <div>
            <img src="/collab/star__feedback.png" alt="logo" />
            <img src="/collab/star__feedback.png" alt="logo" />
            <img src="/collab/star__feedback.png" alt="logo" />
            <img src="/collab/star__feedback.png" alt="logo" />
            <img src="/collab/star__feedback.png" alt="logo" />
            <p className="five__star">5</p>
          </div>
        </div>
        <hr />
        {/* btns__container */}
        <div className="ratings__container">
          <div className="rating">
            <p className="rating__para">Communication</p>
            <div>
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <p className="five__star">5</p>
            </div>
          </div>
          <div className="rating">
            <p className="rating__para">Service</p>
            <div>
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <p className="five__star">5</p>
            </div>
          </div>
          <div className="rating">
            <p className="rating__para">Recommend</p>
            <div>
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <img src="/collab/star__feedback.png" alt="logo" />
              <p className="five__star">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
