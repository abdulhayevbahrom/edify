import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Profile({ handleProfileClick }) {
  let edu = JSON.parse(localStorage.getItem("user"));
  console.log(edu);

  function getInitials(name) {
    const words = name.split(" ");
    return words.map((word) => word.charAt(0).toUpperCase()).join("");
  }

  return (
    <div className="Profile">
      <div className="Profile_box">
        {data.map((item, index) => {
          <div className="user_img">
            <img src={edu.image} alt="" />
            <h2>{edu.name}</h2>
            <p>{edu.specialty}</p>
            <p>{edu.address}</p>
            <button>Xabar jo'natish</button>
          </div>;
        })}

        {data.map((item, index) => (
          <div className="user_about">
            <table>
              <tbody>
                <tr>
                  <td>Ism familyasi</td>
                  <td className="Main_td">{edu.fullname}</td>
                </tr>
                <tr>
                  <td>mutaxasisligi</td>
                  <td className="Main_td">{edu.specialty}</td>
                </tr>
                <tr>
                  <td>Tel raqami</td>
                  <td className="Main_td">{edu.phone}</td>
                </tr>
                <tr>
                  <td>Manzili</td>
                  <td className="Main_td">{item.address}</td>
                </tr>
                <tr>
                  <button
                    onClick={() => handleProfileClick(console.log("ok"))}
                    className="Edit_btn"
                  >
                    taxrirlash
                  </button>
                </tr>
                <tr>
                  <td>Mutaxassisligi</td>
                  <td className="Main_td">{edu.specialty}</td>
                </tr>
                <tr>
                  <td>Tel raqami</td>
                  <td className="Main_td">{edu.phone}</td>
                </tr>
                <tr>
                  <td>Manzili</td>
                  <td className="Main_td">{edu.address}</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button onClick={handleProfileClick} className="Edit_btn">
                      Taxrirlash
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="Profile_social-media">
              <Link to="telegram">
                <FaTelegram /> Telegram
              </Link>
              <Link to="instagram">
                <FaInstagram /> Instagram
              </Link>
              <Link to="facebook">
                <FaFacebook /> Facebook
              </Link>
              <Link to="tiktok">
                <FaTiktok /> TikTok
              </Link>
              <Link to="youtube">
                <FaYoutube /> YouTube
              </Link>
            </div>
          </div>
        ))}
      </div>
      : (<p>User topilmadi</p>
    </div>
  );
}

export default Profile;
