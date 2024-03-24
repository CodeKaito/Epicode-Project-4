import React from "react";

const NetflixCard = (props) => {
  return (
    <img
      src={props.img}
      className="poster"
      alt="description"
      style={{ width: "98%", height: "200px", objectFit: "cover", objectPosition: "50% 10%" }}
    />
  );
};

export default NetflixCard;
