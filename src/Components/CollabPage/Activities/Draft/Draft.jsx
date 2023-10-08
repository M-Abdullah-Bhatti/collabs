import "./Draft.css";

const Draft = ({ draftNumber, message, date }) => {
  return (
    <div className="draft__container">
      {/* draft__header */}
      <div className="draft__header">
        <div className="logo">
          <div>
            <img src="/collab/handshake__draft.png" alt="logo" />
          </div>
          <h3>Draft #{draftNumber}</h3>
        </div>
        <p className="date">{date}</p>
      </div>

      {/* draft__body */}
      <div className="draft__body">
        <p className="message">{message}</p>
        <hr />
        {/* btns__container */}
        <div className="btns__container">
          <button>
            {/* Draft 1, mp3 <RxDownload style={{ fontSize: "18px" }} />{" "} */}
            Draft 1, mp3 <img src="/collab/import.png" alt="logo" />{" "}
          </button>
          <button>
            Draft 2, mp3 <img src="/collab/import.png" alt="logo" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Draft;
