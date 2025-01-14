import React from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/main/logo.svg";
import dashboardIcon from "../../assets/sidebar/dashboard.svg";
import paymentIcon from "../../assets/sidebar/payments.svg";
import teachersIcons from "../../assets/sidebar/teachers.svg";
import indexIcon from "../../assets/sidebar/classIndex.svg";
import attendenceIcon from "../../assets/sidebar/attendence.svg";
import settingsIcon from "../../assets/sidebar/settings.svg";

function Sidebar() {
  const sidebarLinks = [
    {
      linkName: "Boshqaruv",
      link: "/",
      icon: dashboardIcon,
    },
    {
      linkName: "To'lovlar",
      link: "/payments",
      icon: paymentIcon,
    },
    {
      linkName: "O'qituvchilar",
      link: "/teachers",
      icon: teachersIcons,
    },
    {
      linkName: "Dars jadvali",
      link: "/class-index",
      icon: indexIcon,
    },
    {
      linkName: "Davomat",
      link: "/attendance",
      icon: attendenceIcon,
    },
    {
      linkName: "Settings",
      link: "/settings",
      icon: settingsIcon,
    },
  ];
  return (
    <div className="sidebar">
      <Link className="sidebar-logo" to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="sidebar-profil">
        <div className="sprofil-left">
          <img src="" alt="" />
        </div>
        <div className="sprofil-right">
          <h3>John Doe</h3>
          <p>Software engineer</p>
        </div>
      </div>
      <div className="sidebar-links-container">
        {sidebarLinks?.map((link, index) => (
          <NavLink to={link.link} className="slink-item" key={index}>
            <img src={link.icon} alt="" />
            <p>{link.linkName}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
