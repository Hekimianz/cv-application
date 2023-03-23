import React from "react";
import "./styles/Edit.css";
export default function Edit(props) {
  return (
    <div className="edit--cont">
      <h1>Personal Information</h1>
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
    </div>
  );
}
