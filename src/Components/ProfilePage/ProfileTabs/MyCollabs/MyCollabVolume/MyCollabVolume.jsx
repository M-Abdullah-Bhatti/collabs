import { useRef, useState, useEffect } from "react";
import "./MyCollabVolume.css";
import { AiOutlinePause } from "react-icons/ai";
import { AudioVisualizer } from "react-audio-visualize";

const MyCollabVolume = () => {
  const audioRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlay = () => {
    console.log("Audio Play Event Triggered");
    setIsPlaying(true);
  };

  const handlePause = () => {
    console.log("Audio Pause Event Triggered");
    setIsPlaying(false);
  };

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      console.log("Current Time:", audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    // Fetch the static audio file and set it as a blob
    fetch("/profile/sample.ogg")
      .then((response) => response.blob())
      .then((audioBlob) => {
        setBlob(audioBlob);
      });

    const audioElem = audioRef.current;
    if (audioElem) {
      // Add event listeners for the audio element
      audioElem.addEventListener("play", handlePlay);
      audioElem.addEventListener("pause", handlePause);
      audioElem.addEventListener("timeupdate", updateTime);

      // Cleanup the event listeners on component unmount
      return () => {
        audioElem.removeEventListener("play", handlePlay);
        audioElem.removeEventListener("pause", handlePause);
        audioElem.removeEventListener("timeupdate", updateTime);
      };
    }
  }, []);

  const handleVolumeClick = () => {
    const audioElem = audioRef.current;
    if (audioElem) {
      if (audioElem.paused || audioElem.ended) {
        audioElem.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioElem.pause();
      }
    }
  };

  return (
    <>
      <div className="mycollabvolume__container">
        <div className="content">
          <h1>You Are My Everything</h1>
          <p>Sean Kim, Asad Ali, Mahnoor Ali and 2 others</p>
        </div>
        <div className="volume__container">
          <div className="top__container">
            <div className="left__container" onClick={handleVolumeClick}>
              {isPlaying ? (
                <AiOutlinePause />
              ) : (
                <img src="./profile/collab__play.png" alt="logo" />
              )}
            </div>
            <div className="right__container">
              {blob && (
                <AudioVisualizer
                  blob={blob}
                  width={500}
                  height={95}
                  barWidth={2}
                  gap={2}
                  barColor="black"
                  barPlayedColor="#FFE500"
                  currentTime={currentTime}
                />
              )}
            </div>
          </div>
          <div className="bottom__container">
            <div className="left__container">
              <span>01:23</span>/ <span>2:35</span>
            </div>
            <div className="right__container">
              <img src="/profile/shared__volume-low.png" alt="logo" />
              <div className="volume-container">
                <div className="volume-bar">
                  <div className="yellow-part">
                    <div className="bullet"></div>
                  </div>
                  <div className="black-part"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="volume__description">
        <p>
          Description Goes here. This is just a simple description or the
          caption you put under the post to describe the post. There is no need
          to read it completely; you can stop now.
        </p>
      </div>
      <audio ref={audioRef} src="/profile/sample.ogg" preload="auto" />
    </>
  );
};

export default MyCollabVolume;
