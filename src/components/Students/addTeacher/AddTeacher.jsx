import React, { useState } from "react";
import { message } from "antd";
import { FiX } from "react-icons/fi";
import axios from "../../../api";

function AddTeacher() {
  const [phoneValue, setPhoneValue] = useState([]);

  const [data, setData] = useState({
    fullname: "",
    phone: phoneValue,
    address: "",
    login: "",
    password: "",
    socialNetworks: {
      facebook: "",
      instagram: "",
      telegram: "",
      tiktok: "",
      youtube: "",
    },
    specialty: "",
    salary: 0,
  });
  const [file, setFile] = useState(null);

  const registerTeacher = () => {
    console.log(data);
    let formData = new FormData();
    formData.append("image", file);
    formData.append("fullname", data.fullname);
    formData.append("phone", JSON.stringify(data.phone));
    formData.append("address", data.address);
    formData.append("login", data.login);
    formData.append("password", data.password);
    formData.append("specialty", data.specialty);
    formData.append("salary", data.salary);
    formData.append("socialNetworks", JSON.stringify(data.socialNetworks));

    axios
      .post("/teacher/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        message.success(res.data.message);
        setData({
          fullname: "",
          phone: "",
          address: "",
          login: "",
          password: "",
          socialNetworks: {
            facebook: "",
            instagram: "",
            telegram: "",
            tiktok: "",
            youtube: "",
          },
          specialty: "",
          salary: 0,
        });
        setFile(null);
      })
      .catch((err) => {
        message.error(err.response.data.innerData);
      });
  };

  return (
    <div className="adding_teacher_panel">
      <div className="left_form">
        <div className="input">
          <label>O’qituvchi ism va familiyasi</label>
          <input
            type="text"
            onChange={(e) => setData({ ...data, fullname: e.target.value })}
          />
        </div>
        <div className="input">
          <label>O’qituvchi telefon raqami</label>
          <input
            disabled={phoneValue.length === 2}
            type="number"
            onChange={(e) => {
              if (e.target.value.length === 9) {
                setPhoneValue([...phoneValue, e.target.value]);
                setData({ ...data, phone: [...phoneValue, e.target.value] });
                e.target.value = "";
              }
            }}
          />
        </div>
        <div className="phonenumber_container">
          {phoneValue.map((item, index) => (
            <button key={index}>
              {item}{" "}
              <FiX
                onClick={() =>
                  setPhoneValue(phoneValue.filter((i) => i !== item))
                }
              />
            </button>
          ))}
        </div>
        <div className="input">
          <label>O’qituvchi mutaxasisligi</label>
          <input
            type="text"
            onChange={(e) => setData({ ...data, specialty: e.target.value })}
          />
        </div>
        <div className="input">
          <label>O’qituvchi manzili</label>
          <input
            type="text"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className="input">
          <label>Profile</label>
          <input
            accept="image/*"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      <div className="right_form">
        <div className="input">
          <label>O’qituvchi telegram foydalanuvhi nomi</label>
          <input
            type="text"
            onChange={(e) =>
              setData({
                ...data,
                socialNetworks: {
                  ...data.socialNetworks,
                  telegram: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="input">
          <label>O’qituvchi foydalanuchi nomi </label>
          <input
            type="text"
            onChange={(e) => setData({ ...data, login: e.target.value })}
          />
        </div>
        <div className="input">
          <label>O’qituvchi paroli </label>
          <input
            type="text"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="input">
          <label>O’qituvchi ulushi</label>
          <input
            type="number"
            placeholder="%"
            onChange={(e) => setData({ ...data, salary: +e.target.value })}
          />
        </div>
        <button onClick={registerTeacher}>Qo'shish</button>
      </div>
    </div>
  );
}

export default AddTeacher;
