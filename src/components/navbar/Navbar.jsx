import React from "react";
import "./Navbar.css";
import studentsIcon from "../../assets/navbar/students.svg";
import groupsIcon from "../../assets/navbar/groups.svg";
import paymentIcon from "../../assets/navbar/Regular-S.svg";
import serachIcon from "../../assets/navbar/search.svg";
import PickerData from "../antd/DataPicker";

function Navbar() {
  return (
    <header>
      <div className="navbar-item">
        <div className="nitem_left">
          <img src={studentsIcon} alt="" />
        </div>
        <div className="nitem_right">
          <h4>O’quvchilar soni</h4>
          <span>{116}ta</span>
        </div>
      </div>
      <div className="navbar-item">
        <div className="nitem_left">
          <img src={groupsIcon} alt="" />
        </div>
        <div className="nitem_right">
          <h4>O’quvchilar soni</h4>
          <span>{116}ta</span>
        </div>
      </div>
      <div className="navbar-item">
        <div className="nitem_left">
          <img src={paymentIcon} alt="" />
        </div>
        <div className="nitem_right">
          <h4>O’quvchilar soni</h4>
          <span>{116}ta</span>
        </div>
      </div>
      <div className="picer-data-antd">
        <PickerData />
      </div>
      <div className="searchbox">
        <img src={serachIcon} alt="" />
      </div>
    </header>
  );
}

export default Navbar;
