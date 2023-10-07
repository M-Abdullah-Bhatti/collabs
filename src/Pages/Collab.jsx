import Activities from "../Components/CollabPage/Activities/Activities";
import CollabHeader from "../Components/CollabPage/CollabHeader/CollabHeader";
import Details from "../Components/CollabPage/Details/Details";
import Support from "../Components/CollabPage/Support/Support";
import TrackCollab from "../Components/CollabPage/TrackCollab/TrackCollab";
import DeliveryTime from "../Components/CollabPage/DeliveryTime/DeliveryTime";
import "./Collab.css";

const Collab = () => {
  return (
    <div className="collab__container__main">
      <CollabHeader />

      <div className="collab__main">
        {/* Left Container */}

        <div className="left__main">
          <Details />
          <Activities />
        </div>

        {/* Right Container */}

        <div className="right__main">
          <DeliveryTime />
          <TrackCollab />
          <Support />
        </div>
      </div>
    </div>
  );
};

export default Collab;
