import React from "react";
import "./Avatar.css";
const Avatar = (props) => {
  const classes = `avatar ${props.className}`;
  return (
    <div className={classes} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
