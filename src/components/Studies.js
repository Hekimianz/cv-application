import React from "react";
export default function Studies(props) {
  return (
    <div className="exp--cont">
      <p className="exp--item">
        <span className="exp--subtitle-2">School: </span>
        {props.study.school}
      </p>
      <p className="exp--item">
        <span className="exp--subtitle-2">Title: </span>
        {props.study.title}
      </p>
      <p className="exp--item">
        <span className="exp--subtitle-2">From: </span>
        {props.study.from}
      </p>
      <p className="exp--item">
        <span className="exp--subtitle-2">To: </span>
        {props.study.to}
      </p>

      {props.totalStudies.length > 1 && <hr className="exp--hr" />}
    </div>
  );
}
