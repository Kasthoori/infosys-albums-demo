import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  const handleClick = props.onClick;
  const id = props.id;
  const title = props.title;
  const userId = props.userId;

  return (
    <div className="ListItem" onClick={() => handleClick(id, title, userId)}>
      <span id="number">{props.id}</span>
      <br />
      <span id="txt">{props.title}</span>
    </div>
  );
};

export default ListItem;
