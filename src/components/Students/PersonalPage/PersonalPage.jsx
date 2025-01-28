import React from "react";
import "./PersonalPage.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsPercent } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";

function PersonalPage({ data }) {
  return (
    <div className="personal">
      <div className="personaldata">
        <div className="photo_logo"></div>
        <h1>{data?.fullname}</h1>
        <p>
          O’quchilar soni: <span className="z">106ta</span>
        </p>
        <p>
          Guruhlar soni: <span className="z"> 7ta</span>
        </p>
        <p>
          Maoshi: <span>{data?.salary || 0} so’m</span>
        </p>
      </div>
      <div className="extradata">
        <p>
          <span>
            <FaLocationDot />
          </span>{" "}
          {data?.address}
        </p>
        <p>
          <span>
            <FaPhoneAlt />
          </span>{" "}
          {data?.phone?.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <p>
          <span>
            <BsPercent />
          </span>{" "}
          {data?.salary} %
        </p>
        <p>
          <span>
            <PiMedal />
          </span>{" "}
          {data?.specialty}
        </p>
        <p>
          <span>@</span> {data?.socialNetworks?.telegram}
        </p>
      </div>
      <div className="sertificate">
        <div className="img_corp"></div>
      </div>
    </div>
  );
}

export default PersonalPage;
