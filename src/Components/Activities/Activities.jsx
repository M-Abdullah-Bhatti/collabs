import "./Activities.css";
import ActivityHeader from "./ActivityHeader/ActivityHeader";
import ActivityStatus from "./ActivityStatus/ActivityStatus";
import Collab from "./Collab/Collab";
import Draft from "./Draft/Draft";
import ReceiverMessage from "./ReceiverMessage/ReceiverMessage";
import SenderMessage from "./SenderMessage/SenderMessage";

const Activities = () => {
  return (
    <div className="activities__container">
      <ActivityHeader />

      {/* Main Container */}
      <div className="activities__main">
        <ActivityStatus title="ABC started the collab" date="Aug 24, 8.04 PM" />
        <ReceiverMessage
          date="Aug 24, 8.04 PM"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et consectetur quasi voluptatem laboriosam maiores ducimus aperiam repudiandae. Magni enim commodi praesentium corrupti harum ullam porro dolore numquam dignissimos nemo? Blanditiis?"
          isLove={true}
        />
        <SenderMessage
          date="Aug 24, 8.04 PM"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et consectetur quasi voluptatem laboriosam maiores ducimus aperiam repudiandae. Magni enim commodi praesentium corrupti harum ullam porro dolore numquam dignissimos nemo? Blanditiis?"
          isLove={false}
        />
        <ReceiverMessage
          date="Aug 24, 8.04 PM"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et consectetur quasi voluptatem laboriosam maiores ducimus aperiam repudiandae. Magni enim commodi praesentium corrupti harum ullam porro dolore numquam dignissimos nemo? Blanditiis?"
          isLove={false}
        />
        <SenderMessage
          date="Aug 24, 8.04 PM"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et consectetur quasi voluptatem laboriosam maiores ducimus aperiam repudiandae. Magni enim commodi praesentium corrupti harum ullam porro dolore numquam dignissimos nemo? Blanditiis?"
          isLove={false}
        />

        <ReceiverMessage
          date="Aug 24, 8.04 PM"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          moreMessages={["Sending Now..."]}
          isLove={false}
        />

        <Draft
          date="Aug 24, 8.04 PM"
          draftNumber="1"
          message=" Kindly listen to this and share your reviews."
        />

        <Collab
          date="Aug 24, 8.04 PM"
          message=" Kindly listen to this and share your reviews."
        />

        <ActivityStatus
          title="ABC marked colab on complete"
          date="Aug 24, 8.04 PM"
        />
      </div>
    </div>
  );
};

export default Activities;
