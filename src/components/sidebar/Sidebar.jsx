import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/main/logo.svg";
import { BsGrid } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { PiGridNine, PiGridNineFill, PiStudent } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import { Button, Dropdown } from "antd";

function Sidebar() {
  const navigate = useNavigate();
  const sidebarLinks = [
    {
      linkName: "Boshqaruv",
      link: "/",
      icon: <BsGrid />,
    },
    {
      linkName: "To'lovlar",
      link: "/payments",
      icon: <AiOutlineDollarCircle />,
    },
    {
      linkName: "O'qituvchilar",
      link: "/teachers",
      icon: <LiaGraduationCapSolid />,
    },
    {
      linkName: "O'quvchilar",
      link: "/students",
      icon: <PiStudent />,
    },
    {
      linkName: "Dars jadvali",
      link: "/class-index",
      icon: <PiGridNine />,
    },
    {
      linkName: "Davomat",
      link: "/attendance",
      icon: <PiGridNineFill />,
    },
    {
      linkName: "Settings",
      link: "/settings",
      icon: <LuSettings />,
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleMenuClick = ({ key }) => {
    if (key === "1") {
      navigate("/profile");
    } else if (key === "2") {
      logout();
    }
  };

  const menu_items = [
    {
      label: "Profilim",
      key: "1",
      // icon: <UserOutlined style={{ fontSize: "15px" }} />,
    },
    {
      label: "Tizimdan chiqish",
      key: "2",
      // icon: <LogoutOutlined style={{ fontSize: "15px" }} />,
      danger: true,
    },
  ];

  const menuProps = {
    items: menu_items,
    onClick: handleMenuClick,
  };

  return (
    <div className="sidebar">
      <Link className="sidebar-logo" to="/">
        <img src={logo} alt="" />
      </Link>

      <Dropdown menu={menuProps}>
        <div className="sidebar-profil">
          <div className="sprofil-left">
            <img src="" alt="" />
          </div>
          <div className="sprofil-right">
            <h3>John Doe</h3>
            <p>Software engineer</p>
          </div>
        </div>
      </Dropdown>
      <div className="sidebar-links-container">
        {sidebarLinks?.map((link, index) => (
          <NavLink to={link.link} className="slink-item" key={index}>
            <span>{link.icon}</span>
            <p>{link.linkName}</p>
          </NavLink>
        ))}
      </div>
      <div className="sidebar-foter">
        <span>
          © 2022 All rights reserved! <br /> Made by Edify Team
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
