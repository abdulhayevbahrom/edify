import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import studentsIcon from "../../assets/navbar/students.svg";
import groupsIcon from "../../assets/navbar/groups.svg";
import paymentIcon from "../../assets/navbar/Regular-S.svg";
import PickerData from "../antd/DataPicker";
import { IoSearch } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import axios from "../../api";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showInput, setShowInput] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Tashqi bosishlarni kuzatish
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        !e.target.closest(".searchResult")
      ) {
        setShowInput(false); // Qidiruv panelini yopish
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Qidiruv natijasiga bosganda navigatsiya qilish
  const clickSearchItem = (id) => {
    console.log("Navigating to:", "/students/" + id); // Debug uchun log
    setShowInput(false); // Qidiruv panelini yopish
    setTimeout(() => navigate("/students/" + id), 0); // Kechiktirib navigatsiya qilish
  };

  // API chaqiruvni debouncing bilan optimallashtirish
  useEffect(() => {
    if (!searchTerm) return;

    const debounceTimeout = setTimeout(() => {
      axios
        .post(
          "/students/search",
          { search: searchTerm },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => setSearchResult(res.data.innerData))
        .catch((err) => console.log(err));
    }, 300); // 300ms kechiktirish

    return () => clearTimeout(debounceTimeout); // Eski timeoutni tozalash
  }, [searchTerm]);

  return (
    <header className={`navbar ${showInput ? "input-active" : ""}`}>
      {!showInput && (
        <>
          <div className="navbar-item">
            <div className="nav-item_left">
              <img src={studentsIcon} alt="students" />
            </div>
            <div className="nav-item_right">
              <h4>O’quvchilar soni</h4>
              <p>
                {116}
                <span>ta</span>
              </p>
            </div>
          </div>
          <div className="navbar-item">
            <div className="nav-item_left">
              <img src={groupsIcon} alt="groups" />
            </div>
            <div className="nav-item_right">
              <h4>Guruhilar soni</h4>
              <p>
                {116}
                <span>ta</span>
              </p>
            </div>
          </div>
          <div className="navbar-item">
            <div className="nav-item_left">
              <img src={paymentIcon} alt="payment" />
            </div>
            <div className="nav-item_right">
              <h4>To’lov qilmaganlar soni</h4>
              <p>
                {116}
                <span>ta</span>
              </p>
            </div>
          </div>
          <div className="picer-data-antd">
            <PickerData />
          </div>
        </>
      )}

      <div className="searchbox" onClick={() => setShowInput(true)}>
        {showInput ? (
          <div className="search-input-container">
            <div className="search-input" ref={inputRef}>
              <FiSearch />
              <input
                type="text"
                className="full-width-input"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="searchResult">
              {searchResult.map((item) => (
                <p
                  key={item._id}
                  className="searchResult-item"
                  onClick={() => clickSearchItem(item._id)}
                >
                  {item.fullname}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <IoSearch className="header-search" />
        )}
      </div>
    </header>
  );
}

export default Navbar;
