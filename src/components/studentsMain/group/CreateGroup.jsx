import React from 'react'
import "./CreateGroup.css"


function CreateGroup() {
    return (
        
        <div className='CreateGroup'>
            console.log("ok");
            <form>
                <div className="group_teacher">
                    <label>Guruh mutaxasisligi </label>
                    <input type="text" placeholder="" />
                </div>
                <div className="group_time">
                    <div className="group_time_start">
                        <label>Guruh boshlanish vaqti</label>
                        <input type="number" placeholder="" />
                    </div>
                    <div className="group_time_end">
                        <label>Guruh tugash vaqti</label>
                        <input type="number" placeholder="" />
                    </div>
                </div>
                <div className="group_room_number">
                    <label>Xona raqami</label>
                    <input type="number" placeholder="" />
                </div>
                <button>Qo'shish</button>
            </form>
        </div>
    )
}

export default CreateGroup