import React from "react";
import "../components/styles/Experience.css";
export default function Experience(props) {
  return (
    <div className="exp--cont">
      <p className="exp--item">
        <span className="exp--subtitle-2">Position: </span>
        {props.exp.position}
      </p>
      <p className="exp--item">
        <span className="exp--subtitle-2">Company: </span>
        {props.exp.company}
      </p>
      <p className="exp--item">
        <span className="exp--subtitle-2">Location: </span>
        {props.exp.location}
      </p>
      <p className="exp--item">
        <span className="exp--subtitle-2">from: </span>
        {props.exp.from}
      </p>
      <p className="exp--item">
        <span className="exp--subtitle-2">To: </span>
        {props.exp.to}
      </p>
      {props.totalExp.length > 1 && <hr className="exp--hr" />}
    </div>
  );
}
