import React from 'react'
import "./Teacher.css"
import { FiX } from 'react-icons/fi'

function Teacher() {
  return (
    <div className='teacher'>
      <h1>O’qituvchilar</h1>
      <div className="teacher_panel">
        <button>O'qituvchi qo'shish</button>
        <button>Guruhlar</button>
        <button>Shaxsiy malumotlar</button>
        <button>O'qituvchilar ro'yhati</button>
        <button>Xabarlar</button>
      </div>
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
            <button>+998999787525 <span><FiX/></span></button>
            <button>+998999787525 <span><FiX/></span></button>
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
            <label>O’qituvchi  telegram foydalanuvhi nomi</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>O’qituvchi foydalanuchi nomi </label>
            <input type="text" />
          </div>
          <div className="input">
            <label>O’qituvchi foydalanuchi nomi </label>
            <input type="text" />
          </div>
          <div className="input">
            <label>O’qituvchi  ulushi</label>
            <input type="number" placeholder='%'/>
          </div>
          <button>Qo'shish</button>
        </div>
      </div>
    </div>
  )
}

export default Teacher