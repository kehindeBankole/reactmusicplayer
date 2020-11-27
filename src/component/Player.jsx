import React from "react";
import "./player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faCropAlt} from "@fortawesome/free-solid-svg-icons";
function Player({name ,icon, play , prev , next , time , forward , value , shuffle , mute ,artisteicon, volumeicon}) {
  return (
    <div className="player">
      <div className="img"><img src={artisteicon} alt="artist icon"/></div>
     <span id="ddd">
     <div className="musicname" onClick={()=>console.log(name)}id="name">{name}</div>
      <div className="playpause">
        <FontAwesomeIcon icon={faBackward} onClick={prev} className="controlicon navigate"/>
        <FontAwesomeIcon icon={icon} size="2x" onClick={play} className="controlicon" />
        <FontAwesomeIcon icon={faForward} size="1x" onClick={next} className="controlicon navigate"/>
      </div>
      <div className="volume">
      <input type="range" style={{height:"4px" , width:'100%'}} value={value} onChange={forward}/>
      </div>
      <div className="time">{time}</div>
      <div className="volume"><FontAwesomeIcon icon={volumeicon} size="1x" className="controlicon" onClick={mute}/></div>
      <div className="shuffle"><FontAwesomeIcon icon={faCropAlt} size="1x" className="controlicon" onClick={shuffle} /></div>
     </span>
     </div>
  );
}

export default Player;
