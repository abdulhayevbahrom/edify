import React, { useEffect, useState } from "react";
import "./AddStudent.css";
import { message, Alert, Select } from "antd";
import axios from "../../../api";
import PickerData from "../../antd/DataPicker";

function AddStudent() {
  const [groups, setGroups] = useState([]);
  const [errorText, setErrorText] = useState(false);
  useEffect(() => {
    axios
      .get("/group/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setGroups(res.data.innerData))
      .catch((err) => {
        setErrorText(err.response.data.message);
        message.error(err.response.data.message);
      });
  }, []);
  console.log(groups);

  const selectData = groups.map((g) => g && { label: g.name, value: g._id });

  return (
    <div className="AddStudent">
      {errorText ? (
        <Alert
          style={{ marginBottom: "20px" }}
          message={errorText}
          type="error"
        />
      ) : (
        <></>
      )}
      <div className="add_student_box">
        <div className="left_form">
          <div className="input">
            <label>O’quvchi ism va familiyasi</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>O’quvchi telefon raqami</label>
            <input type="number" />
          </div>

          <div className="input">
            <label>O’quvchini ota-onasini telfon raqami</label>
            <input type="number" />
          </div>
          <div className="student_bithday-shtxr">
            <div className="input">
              <label>O’quvchi tug'ilgan sanasi</label>
              <div className="student_bithday-shtxr_data">
                <PickerData />
              </div>
            </div>
            <div className="input">
              <label>O’qituvchi SHTXR </label>
              <input className="student_bithday-shtxr_input" type="text" />
            </div>
          </div>
          <div className="input">
            <label>O’quvchi manzili </label>
            <input type="text" />
          </div>
        </div>
        <div className="right_form">
          <div className="input">
            <label>O’quvchi guruhi </label>
            {/* <input type="number" placeholder="" /> */}
            <Select style={{ width: "530px" }} options={selectData} />
          </div>
          <div className="input">
            <label>O’quvchi to'lov summasi </label>
            <input type="number" placeholder="" />
          </div>
          <button>Qo'shish</button>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
