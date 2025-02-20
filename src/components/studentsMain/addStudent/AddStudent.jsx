import React, { useEffect, useState } from "react";
import "./AddStudent.css";
import { message, Alert, Select } from "antd";
import axios from "../../../api";

function AddStudent() {
  const [groups, setGroups] = useState([]);
  const [errorText, setErrorText] = useState(false);
  const [paymentValue, setPaymentValue] = useState("");
  const [phoneValue, setPhoneValue] = useState([]);
  const [group_info, setGroupInfo] = useState({});

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

  const selectData = groups.map((g) => g && { label: g.name, value: g._id });

  // // set payment
  const findPayment = (e) => {
    let result = groups.find((group) => group._id === e);
    setPaymentValue(result.payment);
    setGroupInfo({
      group_id: result._id,
      group_name: result.name,
      payment: +result.payment,
    });
  };

  // create students
  const createStudent = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.phone = phoneValue;
    data.student_group = group_info;

    axios
      .post("/students/create", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        message.success(res.data.message);
        e.target.reset();
        setPhoneValue([]);
        setGroupInfo({});
      })
      .catch((err) => {
        console.log(err);

        message.error(err.response.data.message);
      });
  };

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
      <form onSubmit={createStudent} className="add_student_box">
        <div className="left_form">
          <div className="input">
            <label>O’quvchi ism va familiyasi</label>
            <input type="text" name="fullname" />
          </div>
          <div className="input">
            <label>O’quvchi telefon raqami</label>
            <input
              type="number"
              name="phone"
              maxLength={9}
              onChange={(e) => {
                if (e.target.value.length === 9) {
                  setPhoneValue([...phoneValue, e.target.value]);
                  // setData({ ...data, phone: [...phoneValue, e.target.value] });
                  e.target.value = "";
                }
              }}
            />
          </div>{" "}
          <div className="input">
            <label>O’quvchini ota-onasining telfon raqami</label>
            <input type="number" name="parents_phone" maxLength={9} />
          </div>
          <div className="student_bithday-shtxr">
            <div className="input">
              <label>O’quvchi tug'ilgan sanasi</label>
              <div className="student_bithday-shtxr_data">
                {/* <PickerData onChange={(e) => PickData(e)} /> */}
                <input type="date" name="birthDate" style={{ width: "100%" }} />
              </div>
            </div>
            <div className="input">
              <label>O’qituvchi SHTXR </label>
              <input
                className="student_bithday-shtxr_input"
                type="text"
                name="passport_id"
              />
            </div>
          </div>
          <div className="input">
            <label>O’quvchi manzili </label>
            <input type="text" name="address" />
          </div>
        </div>
        <div className="right_form">
          <div className="input">
            <label>O’quvchi guruhi </label>
            {/* <input type="number" placeholder="" /> */}
            <Select
              onChange={findPayment}
              style={{ width: "530px" }}
              options={selectData}
              name="student_group"
            />
          </div>
          <div className="input">
            <label>O’quvchi to'lov summasi </label>
            <input
              disabled
              type={paymentValue > 0 ? "number" : "text"}
              placeholder="to'lov summasi"
              value={paymentValue > 0 ? paymentValue : ""}
              style={{ cursor: "not-allowed" }}
              name="student_payment"
            />
          </div>
          <button>Qo'shish</button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
