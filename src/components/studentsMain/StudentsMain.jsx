import React from "react";
import "./StudentsMain.css";
import { Tabs } from "antd";

function StudentsMain() {
  return (
    <div className="students-main">
      <h1>O’quvchilar</h1>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="O'quvchi qo'shish" key="1">
          <h1>o'quvchi qo'shish</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Yangi guruh yaratish" key="2">
          <h1>Guruhlar</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Shaxsiy malumotlar" key="3">
          <h1>shaxshiy malumotlar</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default StudentsMain;
