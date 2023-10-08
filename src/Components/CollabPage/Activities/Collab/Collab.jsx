import "./Collab.css";
// import { RxDownload } from "react-icons/rx";

const Collab = ({ message, date }) => {
  return (
    <div className="collab__container">
      {/* collab__header */}
      <div className="collab__header">
        <div className="logo">
          <div>
            <img src="/collab/handshake__colab.png" alt="logo" />
          </div>
          <h3>Collab</h3>
        </div>
        <p className="date">{date}</p>
      </div>

      {/* collab__body */}
      <div className="collab__body">
        <p className="message">{message}</p>
        <hr />
        {/* btns__container */}
        <div className="btns__container">
          <button>
            Dholu.mp3 <img src="/collab/import.png" alt="logo" />{" "}
          </button>
          <button>
            Bholu.mp3 <img src="/collab/import.png" alt="logo" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collab;
