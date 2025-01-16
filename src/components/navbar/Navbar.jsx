import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import studentsIcon from "../../assets/navbar/students.svg";
import groupsIcon from "../../assets/navbar/groups.svg";
import paymentIcon from "../../assets/navbar/Regular-S.svg";
import serachIcon from "../../assets/navbar/search.svg";
import PickerData from "../antd/DataPicker";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  const [showInput, setShowInput] = useState(false); // Input ochilganligini boshqarish
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowInput(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearInput = () => {
    setSearchValue("");
  };

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
              <span>116 ta</span>
            </div>
          </div>
          <div className="navbar-item">
            <div className="nav-item_left">
              <img src={groupsIcon} alt="groups" />
            </div>
            <div className="nav-item_right">
              <h4>Guruhilar soni</h4>
              <span>8 ta</span>
            </div>
          </div>
          <div className="navbar-item">
            <div className="nav-item_left">
              <img src={paymentIcon} alt="payment" />
            </div>
            <div className="nav-item_right">
              <h4>To’lov qilmaganlar soni</h4>
              <span>3 ta</span>
            </div>
          </div>
          <div className="picer-data-antd">
            <PickerData />
          </div>
        </>
      )}

      <div className="searchbox">
        {showInput ? (
          <div className="search-input" ref={inputRef}>
            <FiSearch />
            <input
              type="text"
              className="full-width-input"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
              <IoClose className="clear-icon" onClick={clearInput} />
            )}
          </div>
        ) : (
          <FiSearch
            className="header-search"
            onClick={() => setShowInput(true)}
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
