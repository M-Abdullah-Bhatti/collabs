import { useRef, useState, useEffect } from "react";
import "./MyCollabVolume.css";
import { AiOutlinePause } from "react-icons/ai";
import { AudioVisualizer } from "react-audio-visualize";

const MyCollabVolume = () => {
  const visualizerRef = useRef(null);
  const audioRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load the audio when the component mounts
    fetch("/profile/WhatsApp Ptt 2023-08-06 at 5.24.45 PM.ogg")
      .then((response) => response.blob())
      .then((audioBlob) => {
        setBlob(audioBlob);
      });
  }, []);

  const handleVolumeClick = () => {
    // if (isPlaying) {
    //   audioRef.current.pause();
    // } else {
    //   audioRef.current.play();
    // }

    audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="mycollabvolume__container">
        <div className="content">
          <h1>You Are My Everything</h1>
          <p>Sean Kim, Asad Ali, Mahnoor Ali and 2 others</p>
        </div>
        {/* Volume Container */}
        <div className="volume__container">
          {/* Top Container */}
          <div className="top__container">
            {/* Left Container */}
            <div className="left__container" onClick={handleVolumeClick}>
              {isPlaying ? (
                <AiOutlinePause />
              ) : (
                <img src="./profile/collab__play.png" alt="logo" />
              )}
            </div>
            {/* Right Container */}
            <div className="right__container">
              {blob && (
                <>
                  <audio ref={audioRef} src={URL.createObjectURL(blob)} />
                  <AudioVisualizer
                    ref={visualizerRef}
                    blob={blob}
                    width={500}
                    height={95}
                    barWidth={2}
                    gap={2}
                    barColor="black"
                    barPlayedColor="yellow"
                    // barColor={{
                    //   0: isPlaying ? "yellow" : "black",
                    //   50: isPlaying ? "yellow" : "black",
                    //   100: "black",
                    // }}
                  />
                </>
              )}
            </div>
          </div>
          {/* Bottom Container */}
          <div className="bottom__container">
            {/* Left Container */}
            <div className="left__container">
              <span>01:23</span>/ <span>2:35</span>
            </div>
            {/* Right Container */}
            <div className="right__container">
              <img src="/profile/shared__volume-low.png" alt="logo" />

              {/* ============ */}
              <div class="volume-container">
                <div class="volume-bar">
                  <div class="yellow-part">
                    <div class="bullet"></div>
                  </div>
                  <div class="black-part"></div>
                </div>
              </div>

              {/* ============= */}
            </div>
          </div>
        </div>
      </div>

      <div className="volume__description">
        <p>
          Description Goes here. This is just a simple description or the
          caption you put under the post to describe the post. There is not need
          to read is completely you can stop now.{" "}
        </p>
      </div>
    </>
  );
};

export default MyCollabVolume;
