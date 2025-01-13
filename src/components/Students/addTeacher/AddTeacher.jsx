import React from "react";

import { FiX } from "react-icons/fi";

function AddTeacher() {
  return (
    <div className="adding_teacher_panel">
      <div className="left_form">
        <div className="input">
          <label>O’qituvchi ism va familiyasi</label>
          <input type="text" />
        </div>
        <div className="input">
          <label>O’qituvchi telefon raqami</label>
          <input type="text" />
        </div>
        <div className="phonenumber_container">
          <button>
            +998999787525{" "}
            <span>
              <FiX />
            </span>
          </button>
          <button>
            +998999787525{" "}
            <span>
              <FiX />
            </span>
          </button>
        </div>
        <div className="input">
          <label>O’qituvchi mutaxasisligi</label>
          <input type="text" />
        </div>
        <div className="input">
          <label>O’qituvchi manzili</label>
          <input type="text" />
        </div>
      </div>
      <div className="right_form">
        <div className="input">
          <label>O’qituvchi telegram foydalanuvhi nomi</label>
          <input type="text" />
        </div>
        <div className="input">
          <label>O’qituvchi foydalanuchi nomi </label>
          <input type="text" />
        </div>
        <div className="input">
          <label>O’qituvchi paroli </label>
          <input type="text" />
        </div>
        <div className="input">
          <label>O’qituvchi ulushi</label>
          <input type="number" placeholder="%" />
        </div>
        <button>Qo'shish</button>
      </div>
    </div>
  );
}

export default AddTeacher;
