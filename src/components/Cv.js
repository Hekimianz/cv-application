import React from "react";
import "./styles/Cv.css";
import profilePic from "../profilePic.jpg";
import Experience from "./Experience.js";
import Studies from "./Studies";
import { nanoid } from "nanoid";
export default function Cv(props) {
  const experiences = props.exp.map((item) => (
    <Experience key={nanoid()} exp={item} totalExp={props.exp} />
  ));
  const studies = props.study.map((item) => (
    <Studies key={nanoid()} study={item} totalStudies={props.study} />
  ));
  return (
    <div className="cv--cont">
      <div className="cv--top">
        <p className="cv--name">{props.data.name}</p>
        <p className="cv--title">{props.data.title}</p>
      </div>
      <div className="cv--bot">
        <div className="cv--left">
          {props.data.bio.length > 0 && <p className="cv--leftSubtitle">Bio</p>}
          <p className="cv--item">{props.data.bio}</p>
          {props.exp.length >= 1 && (
            <p className="cv--leftSubtitle">Experience</p>
          )}
          {experiences}
          {props.study.length >= 1 && (
            <p className="cv--leftSubtitle">Studies</p>
          )}
          {studies}
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
