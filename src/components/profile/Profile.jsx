import React, {useState, useEffect} from 'react';
import "./Profile.css";
import { Link } from 'react-router-dom';
import { FaTelegram, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

function Profile({ handleProfileClick }) {
  const [user, setUser] = useState(null );

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.fullname) {
          setUser(parsedUser);
        } else {
         console.error("error");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(">>>", error);
      setUser(null);
    }
  }, []);

// const user = {
//   fullname: "Ali Valiyev",
//   specialty: "Dasturchi",
//   phone: "+998901234567",
//   address: "Toshkent, Uzbekistan",
// };

// localStorage.setItem("user", JSON.stringify(user));



  return (
    <div className='Profile'>
      {user ? (
        <div className="Profile_box">
          <div className="user_img">
            <img src={user.image}  alt="" />
            <h2>{user.fullname}</h2>
            <p>{user.specialty}</p>
            <p>{user.address}</p>
            <button>Xabar jo'natish</button>
          </div>
          <div className="user_about">
            <table>
              <tbody>
                <tr>
                  <td>Ism familyasi</td>
                  <td className='Main_td'>{user.fullname}</td>
                </tr>
                <tr>
                  <td>Mutaxassisligi</td>
                  <td className='Main_td'>{user.specialty}</td>
                </tr>
                <tr>
                  <td>Tel raqami</td>
                  <td className='Main_td'>{user.phone}</td>
                </tr>
                <tr>
                  <td>Manzili</td>
                  <td className='Main_td'>{user.address}</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button onClick={handleProfileClick} className='Edit_btn'>Taxrirlash</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="Profile_social-media">
              <Link to="telegram"><FaTelegram /> Telegram</Link>
              <Link to="instagram"><FaInstagram /> Instagram</Link>
              <Link to="facebook"><FaFacebook /> Facebook</Link>
              <Link to="tiktok"><FaTiktok /> TikTok</Link>
              <Link to="youtube"><FaYoutube /> YouTube</Link>
            </div>
          </div>
        </div>
      ) : (
        <p>User topilmadi</p>
      )}
    </div>
  );
}

export default Profile;
