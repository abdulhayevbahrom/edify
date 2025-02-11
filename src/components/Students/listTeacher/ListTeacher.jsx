import React, { useEffect, useState } from "react";
import "./ListTeacher.css";
import axios from "../../../api";
import money from "./Vector (1).png";

function ListTeacher({ handleTeacherClick }) {
  const [data, setData] = useState([]);
  const teacherName = "Will Smith";
  const teacher_result = getInitials(teacherName);

  useEffect(() => {
    axios
      .get("/teacher/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data.innerData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getInitials(name) {
    const words = name.split(" ");
    return words.map((word) => word.charAt(0).toUpperCase()).join("");
  }

  return (
    <div className="ListTeacher">
      <div className="ListTeacher_box">
        {data.map((item, index) => (
          <div key={index} className="ListTeacher_item">
            {/* <h1>{getInitials(item.fullname)}</h1> */}
            <h1>
              <img src={item?.image} alt="" />
            </h1>
            <p className="ListTeacher_science">{item.specialty}</p>
            <h4 className="ListTeacher_name">{item.fullname}</h4>
            <div className="ListTeacher_money">
              <img src={money} alt="" />
              <p>{item.salary} so'm</p>
            </div>
            <div className="ListTeacher_group">
              <p>
                O'quvchilari: <span>116ta</span>
              </p>
              <p>
                Guruhlari: <span>11ta</span>
              </p>
            </div>
            <button onClick={() => handleTeacherClick(item)}>Batafsil</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListTeacher;
