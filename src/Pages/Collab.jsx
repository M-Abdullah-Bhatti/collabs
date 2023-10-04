import Activities from "../Components/Activities/Activities";
import CollabHeader from "../Components/CollabHeader/CollabHeader";
import Details from "../Components/Details/Details";
import Support from "../Components/Support/Support";
import TrackCollab from "../Components/TrackCollab/TrackCollab";
import DeliveryTime from "../Components/DeliveryTime/DeliveryTime";
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
