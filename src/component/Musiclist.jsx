import React from "react";
import "./musiclist.css";

function Musiclist({ name, play, image, musicname, artist , background , backgroundimage }) {
  return (
    <>
      <div
        className="mainsong"
        style={{
          background:
            `linear-gradient(${background} , transparent) , url(${backgroundimage})`,
        }}
        onClick={play}
      >
        <div id="imagediv">
          <img src={image} />
        </div>
        <div id="musicname">
          <h1>{name}</h1>
          <br/>
          <p>{artist}</p>
        </div>
      </div>
    </>
  );
}

export default Musiclist;
