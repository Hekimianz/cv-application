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
  const [experience, setExperience] = React.useState([]);
  const [study, setStudy] = React.useState([]);

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

  function addStudy() {
    setStudy((prevStudy) => {
      return prevStudy.concat({
        id: nanoid(),
        school: "",
        title: "",
        from: "",
        to: "",
      });
    });
  }

  function delStudy() {
    setStudy((prevData) => {
      return prevData.slice(0, -1);
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
  }

  function changeStudy(e, dataName) {
    const id = e.target.dataset.id;
    setStudy((prevData) => {
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
          btnHandlerAddExp={addExp}
          btnHandlerDelExp={delExp}
          study={study}
          handleStudy={changeStudy}
          btnHandlerAddStudy={addStudy}
          btnHandlerDelStudy={delStudy}
        />
        <Cv data={data} exp={experience} study={study} />
      </div>
    </div>
  );
}
