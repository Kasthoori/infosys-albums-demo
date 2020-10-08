import React from "react";
import "./ListItemImg.css";

const ListItemImg = (props) => {
  // const handleClick = props.onclick;
  const thumbnail = props.track.thumbnailUrl;
  const title = props.track.title;

  const onItemClicked = props.onclick;

  return (
    <div
      className="ListItemImg"
      onClick={() => {
        onItemClicked(props.track);
      }}
    >
      <img id="thumbnail" src={thumbnail} alt="" />
      <span id="text">{title}</span>
    </div>
  );
};

export default ListItemImg;
