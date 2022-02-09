import React from "react";
import "./seasonDisplay.css";
const getSeason = (lat, month) => {
  if (month > 0 && month < 9) {
    return lat < 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "wintr" : "summer";
  }
};
const seasonConfig = {
  winter: {
    text: "Burr it is chilly!",
    iconName: "snowflake",
  },
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
};

export default function SeasonDisplay(props) {

  const season = getSeason(props.lat, new Date().getMonth());
  // seasonConfig[season];
  const { text, iconName } = seasonConfig[season];
  console.log(season);

  return (
    <div className={`season-display ${season}`}>
      <i className={` massive ${iconName} icon icon-left`}></i>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`}></i>
      <br />
      {/* {props.message}:{props.lat} */}
    </div>
  );
}
