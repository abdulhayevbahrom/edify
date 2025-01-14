import React from "react";
import "./Teacher.css";
import { Tabs } from "antd";
import AddTeacher from "./addTeacher/AddTeacher";
import ListTeacher from "./listTeacher/ListTeacher";

function Teacher() {
  return (
    <div className="teacher">
      <h1>O’qituvchilar</h1>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="O'qituvchi qo'shish" key="1">
          <AddTeacher />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Guruhlar" key="2">
          <h1>Guruhlar</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Shaxsiy malumotlar" key="3">
          <h1>Shaxsiy malumotlar</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="O'qituvchilar ro'yhati" key="4">
          <ListTeacher />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Xabarlar" key="5">
          <h1>Xabarlar</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Teacher;

{
  /* <div className="adding_teacher_panel">
  <div className="left_form">
    <div className="input">
      <label>O’qituvchi ism va familiyasi</label>
      <input type="text" />
    </div>
    <div className="input">
      <label>O’qituvchi telefon raqami</label>
      <input type="text" />
    </div>
    <div className="phonenumber_container">
      <button>
        +998999787525{" "}
        <span>
          <FiX />
        </span>
      </button>
      <button>
        +998999787525{" "}
        <span>
          <FiX />
        </span>
      </button>
    </div>
    <div className="input">
      <label>O’qituvchi mutaxasisligi</label>
      <input type="text" />
    </div>
    <div className="input">
      <label>O’qituvchi manzili</label>
      <input type="text" />
    </div>
  </div>
  <div className="right_form">
    <div className="input">
      <label>O’qituvchi telegram foydalanuvhi nomi</label>
      <input type="text" />
    </div>
    <div className="input">
      <label>O’qituvchi foydalanuchi nomi </label>
      <input type="text" />
    </div>
    <div className="input">
      <label>O’qituvchi foydalanuchi nomi </label>
      <input type="text" />
    </div>
    <div className="input">
      <label>O’qituvchi ulushi</label>
      <input type="number" placeholder="%" />
    </div>
    <button>Qo'shish</button>
  </div>
</div>; */
}
