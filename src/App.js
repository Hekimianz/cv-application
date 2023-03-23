import React from "react";
import Cv from "./components/Cv.js";
import Edit from "./components/Edit.js";
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

  function changeData(e, dataName) {
    setData((prevData) => {
      return {
        ...data,
        [dataName]: e.target.value,
      };
    });
  }

  return (
    <div className="main--cont">
      <header>
        <h1>CV Generator</h1>
      </header>
      <div className="components--cont">
        <Edit handleData={changeData} />
        <Cv data={data} />
      </div>
    </div>
  );
}
