import React from "react";
import "./styles/Cv.css";
import profilePic from "../profilePic.jpg";
export default function Cv(props) {
  return (
    <div className="cv--cont">
      <div className="cv--top">
        <p className="cv--name">{props.data.name}</p>
        <p className="cv--title">{props.data.title}</p>
      </div>
      <div className="cv--bot">
        <div className="cv--left">
          <p className="cv--leftSubtitle">Bio</p>
          <p className="cv--item">{props.data.bio}</p>
        </div>
        <div className="cv--right">
          <img className="cv--pic" src={profilePic} alt="profile" />
          <p className="cv--head">Personal Details</p>
          <div className="cv--persDet">
            <p className="cv--rightSubtitle">Address</p>
            <p className="cv--address right--item">{props.data.address}</p>
            <p className="cv--rightSubtitle">Phone Number</p>
            <p className="cv--address right--item">{props.data.phone}</p>
            <p className="cv--rightSubtitle">Email</p>
            <p className="cv--email right--item">{props.data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
