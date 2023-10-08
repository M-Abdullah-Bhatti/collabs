import "./TypeMessage.css";

const TypeMessage = () => {
  return (
    <div className="type__message__container">
      {/* Left Container */}
      <div className="left__container">
        <input type="text" placeholder="Write message here" />
      </div>
      {/* Right Container */}
      <div className="right__container">
        <img src="/collab/paperclip.png" alt="logo" />
        <img src="/collab/mic_black_24dp 1.png" alt="logo" />
        <div>
          <img src="/collab/send.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default TypeMessage;
