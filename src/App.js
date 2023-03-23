import React from "react";
import Cv from "./components/Cv.js";
import Edit from "./components/Edit.js";
import { nanoid } from "nanoid";
export default function App() {
  const [data, setData] = React.useState({
    name: "",
    title: "",
    photo: "",
    address: "",
    phone: "",
    email: "",
    bio: "",
  });
  const [experience, setExperience] = React.useState([
    {
      id: nanoid(),
      position: "",
      company: "",
      location: "",
      from: "",
      to: "",
    },
  ]);

  function changeData(e, dataName) {
    setData((prevData) => {
      return {
        ...data,
        [dataName]: e.target.value,
      };
    });
  }

  function addExp() {
    setExperience((prevData) => {
      return prevData.concat({
        id: nanoid(),
        position: "",
        company: "",
        location: "",
        from: "",
        to: "",
      });
    });
  }

  function delExp() {
    setExperience((prevData) => {
      return prevData.slice(0, -1);
    });
  }

  function changeExp(e, dataName) {
    const id = e.target.dataset.id;
    setExperience((prevData) => {
      return prevData.map((obj) => {
        return id === obj.id
          ? {
              ...obj,
              [dataName]: e.target.value,
            }
          : {
              ...obj,
            };
      });
    });
    console.log(experience);
  }

  return (
    <div className="main--cont">
      <header>
        <h1>CV Generator</h1>
      </header>
      <div className="components--cont">
        <Edit
          handleData={changeData}
          exp={experience}
          handleExp={changeExp}
          btnHandlerAdd={addExp}
          btnHandlerDel={delExp}
        />
        <Cv data={data} exp={experience} />
      </div>
    </div>
  );
}
