import React, { useState } from "react";
import "./Teacher.css";
import { Tabs } from "antd";
import AddTeacher from "./addTeacher/AddTeacher";
import PersonalPage from "./PersonalPage/PersonalPage";
import ListTeacher from "./listTeacher/ListTeacher";

function Teacher() {
  const [activeTab, setActiveTab] = useState({
    activeKey: "1",
    data: null,
  });
  const handleTeacherClick = (teacher) => {
    setActiveTab({ activeKey: "3", data: teacher });
  };

  return (
    <div className="teacher">
      <h1>O’qituvchilar</h1>
      <Tabs
        activeKey={activeTab.activeKey}
        onChange={(key) => setActiveTab({ activeKey: key, data: null })}
        defaultActiveKey="1"
      >
        <Tabs.TabPane tab="O'qituvchi qo'shish" key="1">
          <AddTeacher />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Guruhlar" key="2">
          <h1>Guruhlar</h1>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Shaxsiy malumotlar" key="3">
          <PersonalPage data={activeTab.data} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="O'qituvchilar ro'yhati" key="4">
          <ListTeacher handleTeacherClick={handleTeacherClick} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Xabarlar" key="5">
          <h1>Xabarlar</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Teacher;
