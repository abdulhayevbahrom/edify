import React, { useEffect, useState } from "react";
import "./CreateGroup.css";
import axios from "../../../api";
import { message } from "antd";

function CreateGroup() {
  const [teachers, setTeachers] = useState([]);
  let token = localStorage.getItem("token") || null;

  useEffect(() => {
    axios
      .get("/teacher/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTeachers(res?.data?.innerData))
      .catch((err) => console.log(err));
  }, []);

  const newGroup = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    data.room_number = parseInt(data.room_number);
    data.capacity = parseInt(data.capacity);
    data.students = [];
    data.group_teacher = {
      teacher_id: data.group_teacher,
      teacher_name: teachers.find((i) => i._id === data.group_teacher)
        ?.fullname,
    };

    axios
      .post("/group/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res?.data?.state) {
          message.success(res?.data?.message);
        }
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => e.target.reset());
  };
  return (
    <div className="CreateGroup">
      <form onSubmit={newGroup}>
        <div className="group_teacher">
          <label>Guruh nomi</label>
          <input name="name" type="text" placeholder="" />
        </div>
        <div className="group_teacher">
          <label>Guruh mutaxasisligi </label>
          <input name="specialty" type="text" placeholder="" />
        </div>
        <div className="group_teacher">
          <label>Mas'ul o'qituvchi</label>
          {/* <input name="group_teacher" type="text" placeholder="" /> */}
          <select name="group_teacher">
            {teachers.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.fullname} [{teacher.specialty}]
              </option>
            ))}
          </select>
        </div>
        <div className="group_teacher">
          <label>Guruh sig'imi</label>
          <input name="capacity" type="number" placeholder="" />
        </div>
        <div className="group_teacher">
          <label>Xona raqami</label>
          <input name="room_number" type="number" placeholder="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          className="group_teacher"
        >
          <label style={{ opacity: 0 }}> label </label>
          <button>Qo'shish</button>
        </div>
      </form>
    </div>
  );
}

export default CreateGroup;
