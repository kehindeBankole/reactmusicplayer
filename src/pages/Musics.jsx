import React, { useContext, useState, useEffect } from "react";
import Musiclist from "../component/Musiclist";
import "./musics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import Player from "../component/Player";
import { MusicContext } from "../context/context";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
function Musics() {
  const context = useContext(MusicContext);
  const { songs, popular } = context;
  let joined = [...songs, ...popular];
  const [csong, setcsong] = useState(0);
  const [isplaying, setisplaying] = useState(false);
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);
  const [value, setvalue] = useState(0);
  const [mute, setmute] = useState(false);
  const audioref = useRef();
  function aaa(index) {
    setcsong(index);
  }

  function play() {
    let minutes = Math.floor(audioref.current.duration / 60);
    setmin(minutes);
    let seconds = (Math.round(audioref.current.duration) / 60).toFixed(2);
    let secondsRounded = seconds - minutes;
    setsec(Math.round(secondsRounded.toFixed(2) * 60));
    setInterval(() => {
      setvalue(
        (audioref.current.currentTime / audioref.current.duration) * 100
      );
    }, 1000);
    if (audioref.current.paused) {
      setisplaying(!isplaying);
      audioref.current.play();
      console.log(Math.round(audioref.current.currentTime));
    } else {
      setisplaying(false);
      audioref.current.pause();
    }
  }
  function mutesound() {
    setmute(!mute);
    audioref.current.volume === 0
      ? (audioref.current.volume = 1)
      : (audioref.current.volume = 0);
  }
  function prev() {
    setcsong(csong <= 0 ? joined.length - 1 : csong - 1);
  }
  function next() {
    setcsong(csong >= joined.length - 1 ? 0 : csong + 1);
  }
  function shuffle() {
    setcsong(Math.floor(Math.random() * joined.length))
  }
  function forward() {}
  useEffect(() => {
    setvalue(0);
    setisplaying(false)
  }, [csong]);

  return (
    <main>
      <div className="container" id="musicpage">
        <div className="topicons">
          <button className="btn" id="click">
          <span>  play</span>
            <FontAwesomeIcon icon={faPlayCircle} size="sm" id="play" />
          </button>
          <button className="btn btnicon">
            <FontAwesomeIcon icon={faBookmark} size="1x" />
          </button>
          <button className="btn btnicon" id="share">
            <FontAwesomeIcon icon={faShare} size="1x" />
          </button>
        </div>
        <div className="songcontainer">
          {songs.map((elem, index) => (
            <div
              className=""
              style={{ paddingRight: "20px", width: "400px" }}
              onClick={() => aaa(index)}
              key={index}
            >
              <Musiclist
                name={elem.name}
                src={elem.audiosrc}
                image={elem.imgsrc}
                artist={elem.artiste}
                background={
                  elem.genre === "blues"
                    ? "blue"
                    : elem.genre === "reggae"
                    ? "red"
                    : elem.genre === "hip-hop"
                    ? "yellow"
                    : ""
                }
              />
            </div>
          ))}
        </div>
        <div className="allcontainer">
          {joined.map((elem, index) => (
            <div onClick={() => aaa(index)} key={index}>
              <Musiclist
                name={elem.name}
                src={elem.audiosrc}
                // image={elem.imgsrc}
                artist={elem.artiste}
                backgroundimage={elem.imgsrc}
                background={'red'}
              />
            </div>
          ))}
        </div>
        <audio ref={audioref} src={joined[csong].audiosrc} preload="true"/>
        <Player
          icon={isplaying ? faPauseCircle : faPlayCircle}
          play={play}
          prev={prev}
          next={next}
          name={joined[csong].name}
          artisteicon={joined[csong].imgsrc}
          time={min && sec ? `${min}:${sec}` : "00:00"}
          value={value}
          forward={forward}
          volumeicon={mute ? faVolumeMute : faVolumeUp}
          mute={mutesound}
          shuffle={shuffle}
        />
      </div>
    </main>
  );
}

export default Musics;
