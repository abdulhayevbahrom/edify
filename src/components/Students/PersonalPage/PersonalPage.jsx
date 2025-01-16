import React from 'react'
import "./PersonalPage.css"
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsPercent } from 'react-icons/bs'
import { PiMedal } from 'react-icons/pi'

function PersonalPage() {
    return (
        <div className='personal'>
            <div className="personaldata">
                <div className="photo_logo"></div>
                <h1>John Doe</h1>
                <p>O’quchilar soni:  <span className='z'>106ta</span></p>
                <p>Guruhlar soni: <span className='z'> 7ta</span></p>
                <p>Maoshi: <span>4.000.000 so’m</span></p>
            </div>
            <div className="extradata">
                <p><span><FaLocationDot /></span>  20-uy, Bo’lon, Chortoq,  Namangan viloyati</p>
                <p><span>< FaPhoneAlt/></span> +998999787525, +998999787526</p>
                <p><span>< BsPercent/></span>  40%</p>
                <p><span><PiMedal/></span> Dasturiy muhandis</p> 
                <p><span>@</span>  john_doe</p> 
            </div> 
            <div className="sertificate">
                <div className="img_corp">    
                      
                </div>            
            </div>
        </div>
    )
}

export default PersonalPage