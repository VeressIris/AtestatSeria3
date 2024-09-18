import { useEffect, useRef, useState } from "react";

export default function VideoPlayer({ thumbnail, videoSrc }) {
  const [currentTime, setCurrentTime] = useState("0:00");
  const [maxTime, setMaxTime] = useState("0:00");
  const [percentTime, setpercentTime] = useState("0%");

  function convertTime(sec) {
    const sec2 = Math.floor(sec);
    const minutes = Math.floor(sec2 / 60);
    const seconds1 = sec2 % 60;
    const seconds2 = seconds1 < 10 ? "0" + seconds1 : seconds1;
    return minutes + ":" + seconds2;
  }

  const videoContainer = useRef();
  const video = useRef();
  const playButton = useRef();

  const menuPlayButton = useRef();

  function pauseIfPlayed() {
    if (!video.current.paused) {
      video.current.pause();
      playButton.current.style.display = "block";
      menuPlayButton.current.src = "/video-player/play.png";
    }
  }

  function play() {
    video.current.play();
    playButton.current.style.display = "none";
    menuPlayButton.current.src = "/video-player/pause.png";
    setMaxTime(convertTime(video.current.duration));
  }

  function menuPlay() {
    if (video.current.paused) {
      video.current.play();
      playButton.current.style.display = "none";
      menuPlayButton.current.src = "/video-player/pause.png";
      setMaxTime(convertTime(video.current.duration));
    } else {
      video.current.pause();
      playButton.current.style.display = "block";
      menuPlayButton.current.src = "/video-player/play.png";
    }
  }

  function loop() {
    if (video.current.loop === true) video.current.loop = false;
    else video.current.loop = true;
  }

  function rewind() {
    video.current.currentTime -= 10;
  }
  function skipForward() {
    video.current.currentTime += 10;
  }

  const [isFullscreen, setFullscreen] = useState(false);

  function fullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullscreen(false);
    } else {
      videoContainer.current.requestFullscreen();
      setFullscreen(true);
    }
  }

  const [showVolume, setShowVolume] = useState(false);
  function toggleVolume() {
    if (showVolume) setShowVolume(false);
    else setShowVolume(true);
  }
  function changeVolume(e) {
    video.current.volume = e.target.value / 100;
  }

  const [showSpeed, setShowSpeed] = useState(false);
  function toggleSpeed() {
    if (showSpeed) setShowSpeed(false);
    else setShowSpeed(true);
  }
  const [selectedSpeed, setSelectedSpeed] = useState(1);
  function speed(value) {
    video.current.playbackRate = value;
    setSelectedSpeed(value);
    setShowSpeed(false);
  }

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(convertTime(video.current.currentTime));
      const percent =
        video.current.currentTime / (video.current.duration / 100);
      setpercentTime(percent + "%");
    }, 33);
  }, []);

  useEffect(() => {
    function playIfSpace(key) {
      if (key.code === "Space") menuPlay();
    }
    document.addEventListener("keydown", playIfSpace);
    return () => document.removeEventListener("keydown", playIfSpace);
  });

  return (
    <div className="mb-4">
      <div
        className="group relative w-[1080px] aspect-video"
        ref={videoContainer}
      >
        <div
          onClick={pauseIfPlayed}
          onDoubleClick={fullscreen}
          className="w-full"
        >
          <video className="w-full" controls={false} ref={video}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="56px"
            width="56px"
            viewBox="0 -960 960 960"
            fill="#e8eaed"
            ref={playButton}
            onClick={play}
          >
            <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          <div
            className="py-3 absolute bottom-0 left-0 w-full px-5 bg-slate-500 bg-opacity-20 flex flex-col items-center pointer-events-auto group-hover:!flex"
            style={{ display: video?.current?.paused ? "flex" : "none" }}
          >
            <div className="w-full h-2 bg-black">
              <div
                className="h-full bg-red-500"
                style={{ width: percentTime }}
              ></div>
            </div>
            <div className="flex w-full mt-2 items-center justify-between">
              <div className="flex h-full items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#e8eaed"
                  ref={menuPlayButton}
                  onClick={menuPlay}
                >
                  <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  onClick={toggleVolume}
                >
                  <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
                </svg>
                <p className="text-white">
                  {currentTime} / {maxTime}
                </p>
                {showVolume ? (
                  <div className="absolute w-10 h-40 bg-slate-500 bg-opacity-20 rounded-t-2xl bottom-full left-20">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      defaultValue={video.current.volume * 100}
                      className="-rotate-90 -ml-11 mt-20"
                      onChange={changeVolume}
                    />
                  </div>
                ) : null}
              </div>
              <div className="flex h-full items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  onClick={rewind}
                >
                  <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM360-320v-180h-60v-60h120v240h-60Zm140 0q-17 0-28.5-11.5T460-360v-160q0-17 11.5-28.5T500-560h80q17 0 28.5 11.5T620-520v160q0 17-11.5 28.5T580-320h-80Zm20-60h40v-120h-40v120Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  onClick={skipForward}
                >
                  <path d="M360-320v-180h-60v-60h120v240h-60Zm140 0q-17 0-28.5-11.5T460-360v-160q0-17 11.5-28.5T500-560h80q17 0 28.5 11.5T620-520v160q0 17-11.5 28.5T580-320h-80Zm20-60h40v-120h-40v120ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800h6l-62-62 56-58 160 160-160 160-56-58 62-62h-6q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440h80q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  onClick={loop}
                >
                  <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                  onClick={toggleSpeed}
                >
                  <path d="M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z" />
                </svg>
                {!isFullscreen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                    onClick={fullscreen}
                  >
                    <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                    onClick={fullscreen}
                  >
                    <path d="m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z" />
                  </svg>
                )}

                {showSpeed ? (
                  <div className="absolute w-20 h-44 bg-slate-500 bg-opacity-20 rounded-t-2xl bottom-full right-16 flex flex-col items-center justify-center">
                    <button
                      className={
                        "w-full text-white active:text-slate-400 hover:text-slate-300" +
                        (selectedSpeed === 0.25 ? " font-bold" : "")
                      }
                      onClick={() => speed(0.25)}
                    >
                      0.25x
                    </button>
                    <button
                      className={
                        "w-full text-white active:text-slate-400 hover:text-slate-300" +
                        (selectedSpeed === 0.5 ? " font-bold" : "")
                      }
                      onClick={() => speed(0.5)}
                    >
                      0.5x
                    </button>
                    <button
                      className={
                        "w-full text-white active:text-slate-400 hover:text-slate-300" +
                        (selectedSpeed === 0.75 ? " font-bold" : "")
                      }
                      onClick={() => speed(0.75)}
                    >
                      0.75x
                    </button>
                    <button
                      className={
                        "w-full text-white active:text-slate-400 hover:text-slate-300" +
                        (selectedSpeed === 1 ? " font-bold" : "")
                      }
                      onClick={() => speed(1)}
                    >
                      1x
                    </button>
                    <button
                      className={
                        "w-full text-white active:text-slate-400 hover:text-slate-300" +
                        (selectedSpeed === 1.25 ? " font-bold" : "")
                      }
                      onClick={() => speed(1.25)}
                    >
                      1.25x
                    </button>
                    <button
                      className={
                        "w-full text-white active:text-slate-400 hover:text-slate-300" +
                        (selectedSpeed === 1.5 ? " font-bold" : "")
                      }
                      onClick={() => speed(1.5)}
                    >
                      1.5x
                    </button>
                    <button
                      className={
                        "w-full text-white active:text-slate-400 hover:text-slate-300" +
                        (selectedSpeed === 2 ? " font-bold" : "")
                      }
                      onClick={() => speed(2)}
                    >
                      2x
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
