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
import axios from "../../api";

function Profile({ handleProfileClick }) {
  const [data, setData] = useState([]);
  const teacherName = "";
  const teacher_result = getInitials(teacherName);

  useEffect(() => {
    axios
      .get("/teacher/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data.innerData);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getInitials(name) {
    const words = name.split(" ");
    return words.map((word) => word.charAt(0).toUpperCase()).join("");
  }

  return (
    <div className="Profile">
      <div className="Profile_box">
        {data.map((item, index) => {
          <div className="user_img">
            <img src="" alt="" />
            <h2>{item.fullname}</h2>
            <p>{item.specialty}</p>
            <p>{item.address}</p>
            <button>Xabar jo'natish</button>
          </div>;
        })}

        {data.map((item, index) => {
          <div className="user_about">
            <table>
              <tbody>
                <tr>
                  <td>Ism familyasi</td>
                  <td className="Main_td">{item.fullname}</td>
                </tr>
                <tr>
                  <td>mutaxasisligi</td>
                  <td className="Main_td">{item.specialty}</td>
                </tr>
                <tr>
                  <td>Tel raqami</td>
                  <td className="Main_td">{item.phone}</td>
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
              <Link to="tik tok">
                <FaTiktok /> Tiktok
              </Link>
              <Link to="youtobe">
                <FaYoutube /> Youtobe
              </Link>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Profile;
