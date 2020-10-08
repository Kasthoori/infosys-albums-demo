import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ListItemImg from "./componenets/ListItemImg/ListItemImg";
import "./Details.css";

const Details = () => {
  const location = useLocation();
  const history = useHistory();

  let status = "";
  let albumtitle = "";
  let userId = "";
  let aId = "";
  let tracks = [];

  const [albumpic, setAlbumPic] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  try {
    status = location.state.status;
    albumtitle = location.state.title;
    userId = location.state.userId;
    tracks = location.state.tracks;
    aId = location.state.id;
  } catch (err) {
    status = "false";
    tracks = [];
  }

  useEffect(() => {
    if (status !== "true") {
      history.push("/");
    }

    if (tracks.length > 0) {
      setAlbumPic(tracks[0].url);
      setAlbumId(tracks[0].albumId);
      setTitle(tracks[0].title);
      setId(tracks[0].id);
      console.log("YES");
    }
  }, [history, status, tracks]);

  const listItemImgOnClick = (track) => {
    setAlbumPic(track.url);
    setAlbumId(track.albumId);
    setId(track.id);
    setTitle(track.title);
  };

  return (
    <div className="SuperContainer">
      <div className="TopBanner">
        <h1>Album Title: {albumtitle}</h1>
        <h2 id="aid">Album Id: {aId}</h2>
        <h3 id="uid">User Id: {userId}</h3>
      </div>

      <div className="MainContainer">
        <div className="List">
          {tracks.map((track) => (
            <ListItemImg track={track} onclick={listItemImgOnClick} />
          ))}
        </div>

        <div className="LeftView">
          <img id="albumimg" src={albumpic} alt="" />

          <h1>Album ID: {albumId}</h1>
          <span id="idtext">ID: {id}</span>
          <span id="titletext">Title: {title} </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
