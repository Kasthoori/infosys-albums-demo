import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./App.css";
import ListItem from "./componenets/ListItem/ListItem";


const App = () => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const history = useHistory();

  const url1 = "http://jsonplaceholder.typicode.com/albums";
  const url2 = "http://jsonplaceholder.typicode.com/photos";

  document.title = 'Albums Available';

  useEffect(() => {
    async function fetchData() {
      const resp_albums = await axios.get(url1);
      const resp_tracks = await axios.get(url2);

      setAlbums(resp_albums.data);
      setTracks(resp_tracks.data);
    }

    fetchData();
  }, []);

  const listOnClick = (id, title, userId) => {
    let tracks_in_album = tracks.filter((item) => {
      return item.albumId === id;
    });

    history.push("/details", {
      status: "true",
      id: id,
      title: title,
      userId: userId,
      tracks: tracks_in_album,
    });
  };

  if (albums.length === 0) {
    return (
      <div className="App">
        <span data-testid="loading">
          <h4>Loading.....</h4>
        </span>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>{document.title}</h1>

        <div className="List">
          <span data-testid="resolved">
            {albums.map((item) => (
              <ListItem
                key={item.id + item.userId}
                id={item.id}
                title={item.title}
                userId={item.userId}
                onClick={listOnClick}
              />
            ))}
          </span>
        </div>
      </div>
    );
  }
};

export default App;
