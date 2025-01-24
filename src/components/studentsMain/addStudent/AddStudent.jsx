import React from 'react';
import "./AddStudent.css"
import PickerData from "../../antd/DataPicker";



function AddStudent() {
    return (
        <div className='AddStudent'>
            <form className="add_student_box">
                <div className="left_form">
                    <div className="input">
                        <label>O’quvchi ism va familiyasi</label>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <label>O’quvchi telefon raqami</label>
                        <input type="number" />
                    </div>

                    <div className="input">
                        <label>O’quvchini ota-onasini telfon raqami</label>
                        <input type="number" />
                    </div>
                    <div className="student_bithday-shtxr">
                        <div className="input">
                            <label>O’quvchi tug'ilgan sani</label>
                            <div className="student_bithday-shtxr_data">
                             <PickerData className="student_date" />
                            </div>
                        </div>
                        <div className="input">
                            <label>O’qituvchi SHTXR </label>
                            <input className='student_bithday-shtxr_input' type="text" />
                        </div>
                    </div>
                    <div className="input">
                        <label>O’quvchi manzili </label>
                        <input type="text" />
                    </div>
                </div>
                <div className="right_form">
                    <div className="input">
                        <label>O’quvchi guruhi </label>
                        <input type="number" placeholder="" />
                    </div>
                    <div className="input">
                        <label>O’quvchi to'lov summasi </label>
                        <input type="number" placeholder="" />
                    </div>
                    <button>Qo'shish</button>
                </div>
            </form>
        </div>
    )
}

export default AddStudent