import "./SenderMessage.css";
import { AiFillHeart } from "react-icons/ai";

const SenderMessage = ({ date, message, isLove, moreMessages }) => {
  return (
    <div
      className="sender__message__container"
      style={{ marginBottom: isLove ? "0rem" : "1.3rem" }}
    >
      <p className="date">{date}</p>
      <div className="message">
        <p>{message}</p>
      </div>
      {isLove && (
        <div className="heart">
          <AiFillHeart
            style={{
              color: "#ff0000",
              fontSize: "20px",
              margin: 0,
            }}
          />
        </div>
      )}
      {moreMessages &&
        moreMessages.map((mesg, index) => (
          <div className="message" key={index} style={{ marginTop: "3px" }}>
            <p>{mesg}</p>
          </div>
        ))}
    </div>
  );
};

export default SenderMessage;
