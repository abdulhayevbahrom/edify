import React, { useEffect, useState } from "react";
import "./Groups.css";
import axios from "../../api";

function Groups() {
  const [groups, setGroups] = useState([]);
  console.log(groups);

  useEffect(() => {
    axios
      .get("/group/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setGroups(res.data.innerData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="groups">
      {groups.map((item, index) => {
        // let nimadur = index + 3;
        return (
          <div key={index} className="group-item">
            <div className="item-top">
              <span>Group:</span>
              <p>{item.name}</p>
            </div>
            <div className="item-top item-bottom">
              <span>Teacher:</span>
              <p>{item.group_teacher.teacher_name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Groups;
