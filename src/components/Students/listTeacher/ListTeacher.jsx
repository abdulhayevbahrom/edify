

import React from 'react';
import "./ListTeacher.css";
import money from "./Vector (1).png"


function getInitials(name) {
  const words = name.split(' ');
  return words.map(word => word.charAt(0).toUpperCase()).join('');
}

function ListTeacher() {
  const teacherName = "Will Smith";
  const teacher_result = getInitials(teacherName);

  return (
    <div className='ListTeacher'>
      <div className="ListTeacher_box">
        <div className="ListTeacher_item">
          <h1>{teacher_result}</h1>
          <p className='ListTeacher_science'>Adabiyot O'qituvchisi</p>
          <h4 className='ListTeacher_name'>{teacherName}</h4>
          <div className="ListTeacher_money">
            <img src={money} alt="" />
            <p>4.000.000 so'm</p>
          </div>
          <div className="ListTeacher_group">
            <p>O'quvchilari: <span>116ta</span></p>
            <p>Guruhlari: <span>11ta</span></p>
          </div>
          <button>Batafsil</button>
        </div> 
        <div className="ListTeacher_item">
          <h1>{teacher_result}</h1>
          <p className='ListTeacher_science'>Adabiyot O'qituvchisi</p>
          <h4 className='ListTeacher_name'>{teacherName}</h4>
          <div className="ListTeacher_money">
            <img src={money} alt="" />
            <p>4.000.000 so'm</p>
          </div>
          <div className="ListTeacher_group">
            <p>O'quvchilari: <span>116ta</span></p>
            <p>Guruhlari: <span>11ta</span></p>
          </div>
          <button>Batafsil</button>
        </div>       
      </div>
    </div>
  );
}

export default ListTeacher;
