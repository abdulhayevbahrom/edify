import React from "react";
import "./Teacher.css";
import { Tabs } from "antd";
import AddTeacher from "./addTeacher/AddTeacher";
import PersonalPage from "./PersonalPage/PersonalPage";
import ListTeacher from "./listTeacher/ListTeacher";
import Messages from "./messages/Messages";

function Teacher() {
  console.log("ok");

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
          <PersonalPage />
        </Tabs.TabPane>
        <Tabs.TabPane tab="O'qituvchilar ro'yhati" key="4">
          <ListTeacher />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Xabarlar" key="5">
          <Messages />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Teacher;
