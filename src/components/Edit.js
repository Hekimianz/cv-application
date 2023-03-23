import React from "react";
import "./styles/Edit.css";
import { nanoid } from "nanoid";
export default function Edit(props) {
  const experience = props.exp.map((item) => {
    return (
      <div key={() => nanoid()}>
        <div className="edit--item">
          <span>Position</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleExp(e, "position")}
          />
        </div>
        <div className="edit--item">
          <span>Company</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleExp(e, "company")}
          />
        </div>
        <div className="edit--item">
          <span>Location</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleExp(e, "location")}
          />
        </div>
        <div className="edit--item">
          <span>From</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleExp(e, "from")}
          />
        </div>
        <div className="edit--item">
          <span>To</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleExp(e, "to")}
          />
        </div>
        {props.exp.length > 1 && <hr className="edit--hr"></hr>}
      </div>
    );
  });

  const studies = props.study.map((item) => {
    return (
      <div key={() => nanoid()}>
        <div className="edit--item">
          <span>School Name</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleStudy(e, "school")}
          />
        </div>
        <div className="edit--item">
          <span>Title</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleStudy(e, "title")}
          />
        </div>
        <div className="edit--item">
          <span>From</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleStudy(e, "from")}
          />
        </div>
        <div className="edit--item">
          <span>To</span>
          <input
            data-id={item.id}
            type="text"
            className="input"
            onChange={(e) => props.handleStudy(e, "to")}
          />
        </div>
        {props.study.length > 1 && <hr className="edit--hr"></hr>}
      </div>
    );
  });

  return (
    <div className="edit--cont">
      <h2 className="edit--head">Personal Information</h2>
      <div className="edit--item">
        <span>Full Name</span>
        <input
          type="text"
          onChange={(e) => props.handleData(e, "name")}
          className="input"
          id="name-input"
        />
      </div>
      <div className="edit--item">
        <span>Title</span>
        <input
          type="text"
          onChange={(e) => props.handleData(e, "title")}
          className="input"
          id="title--input"
        />
      </div>
      <div className="edit--item">
        <span>Photo</span>
        <input
          type="file"
          onChange={(e) => props.handleData(e, "photo")}
          accept="image/png, image/gif, image/jpeg"
          className="input"
          id="photo--input"
        />
      </div>
      <div className="edit--item">
        <span>Address</span>
        <input
          type="text"
          onChange={(e) => props.handleData(e, "address")}
          className="input"
          id="address--input"
        />
      </div>
      <div className="edit--item">
        <span>Phone Number</span>
        <input
          type="text"
          onChange={(e) => props.handleData(e, "phone")}
          className="input"
          id="phone--input"
        />
      </div>
      <div className="edit--item">
        <span>Email</span>
        <input
          type="text"
          onChange={(e) => props.handleData(e, "email")}
          className="input"
          id="email--input"
        />
      </div>
      <div className="edit--item">
        <span>Bio</span>
        <textarea
          onChange={(e) => props.handleData(e, "bio")}
          className="input"
          id="bio--input"
        ></textarea>
      </div>
      <div className="edit-exp--cont">
        <h2 className="edit--head">Experience</h2>
        {experience}
      </div>
      <button onClick={props.btnHandlerAddExp} className="edit--add-xp-btn">
        Add Exp
      </button>
      <button onClick={props.btnHandlerDelExp} className="edit--del-xp-btn">
        Del Exp
      </button>
      <h2 className="edit--head">Studies</h2>
      {studies}
      <button onClick={props.btnHandlerAddStudy} className="edit--add-xp-btn">
        Add Studies
      </button>
      <button onClick={props.btnHandlerDelStudy} className="edit--del-xp-btn">
        Del Studies
      </button>
    </div>
  );
}
