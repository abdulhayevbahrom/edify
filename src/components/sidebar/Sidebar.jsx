import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/main/logo.svg";
import { BsGrid } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { PiGridNine, PiGridNineFill, PiStudent } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";

function Sidebar() {
  const [changeLogo, setChangeLogo] = useState(false);
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
  return (
    <div className="sidebar">
      <Link className="sidebar-logo" to="/">
        {changeLogo ? <img src={logo} alt="" /> : <img src={logo} alt="" />}
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
