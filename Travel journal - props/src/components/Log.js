import React from "react";
import icon from '../images/location.svg'

export default function Log(props) {
  return (
    <div className="log">
      <img src={props.image} alt="place" className="location--image"/>
      <div className="details">
        <div className="location--maps">
          <img src={icon} alt="location icon" className="location--icon"/>
          <p className="location--country">{props.location.country}</p>
          <a href={props.link} target="blank">View on Google Maps</a>
        </div>
        <h1 className="location--place">{props.location.place}</h1>
        <p className="location--date">{props.startDate} - {props.endDate}</p>
        <p className="location--description">{props.description}</p>
      </div>
    </div>
  )
}