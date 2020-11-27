import React, { useReducer } from "react";
import { MusicContext } from "./context.jsx";
import { MusicReducer } from "./reducer.jsx";
import  billy  from "../assets/songs/billy.mp3";
import  alone  from "../assets/songs/alone.mp3";
import  fiddle  from "../assets/songs/fiddle.mp3";
import  istanbul  from "../assets/songs/istanbul.mp3";
import  jagaban  from "../assets/songs/jagaban.mp3";
import billie from "../assets/images/billie.png"
import illuminati from '../assets/songs/illuminati.mp3'
import weplenti from '../assets/songs/weplenti.mp3'
import confession from '../assets/songs/confession.mp3'
function MusicState(props) {
  const initState = {
    currentsong : 0,
    load: true,
    songs: [
      {
        name: "billy",
        audiosrc: billy,
        imgsrc:billie,
        artiste : "billie eilish",
        genre : 'blues'
      },
      {
        name: "alone",
        audiosrc: alone,
        imgsrc:billie,
        artiste : "billie eilish",
        genre : 'hip-hop'
      },
      {
        name: "fiddle",
        audiosrc: fiddle,
        imgsrc:billie,
        artiste : "billie eilish",
        genre : 'blues'
      },
      {
        name: "istanbul",
        audiosrc: istanbul,
        imgsrc:billie,
        artiste : "billie eilish",
        genre : 'reggae'
      }, {
        name: "jagaban",
        audiosrc: jagaban,
        imgsrc:billie,
        artiste : "ycee ft olamide",
        genre : 'hip-hop'
      }
    ],
    popular : [
      {
        name: "illumati",
        audiosrc: illuminati,
        imgsrc:billie,
        artiste : "olamide"
      },
      {
        name: "we plenti",
        audiosrc: weplenti,
        imgsrc:billie,
        artiste : "cobhams asuquo ft simi"
      },
      {
        name: "confession aiye",
        audiosrc: confession,
        imgsrc:billie,
        artiste : "olamide"
      }
    ]
  };
  function nextsong(){
    dispatch({type : "next"})
  }
  function setcurrentsong(id){
    dispatch({type : "setsong" , payload : id})
  }
  const [state, dispatch] = useReducer(MusicReducer, initState);
  return (
    <MusicContext.Provider
      value={{
        load: state.load,
        songs: state.songs,
        popular: state.popular,
        currentsong: state.currentsong,
        nextsong,
        setcurrentsong
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
}

export default MusicState;
