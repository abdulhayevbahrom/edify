import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import { RxCheck } from "react-icons/rx";
import { PiInfoBold } from "react-icons/pi";
import { BsExclamationLg } from "react-icons/bs";
// antd tooltip
import { Button, Tooltip } from "antd";

function Payment() {
  return (
    <div className="payment">
      {/* <div className="header"></div> */}
      <div className="payment_title">
        <h1>To'lov</h1>
      </div>
      <div className="payment_chart">
        <div className="paid_unpaid">
          <div className="paid">
            <h5>To'lov qilganlar</h5>
            <div className="paid_item">
              <h1>100</h1>
              <RxCheck className="paid_icon" />
            </div>
          </div>
          <p></p>
          <div className="unpaid">
            <h5>To'lov qilmaganlar</h5>
            <div className="unpaid_item">
              <h1>19</h1>
              <BsExclamationLg className="unpaid_icon" />
            </div>
          </div>
        </div>
        <div className="balance_fine">
          <div className="balance">
            <h5>Umumiy balans</h5>
            <Link>Dekabr-Yanvar</Link>
            <h1>4.000.000 so'm</h1>
            <p>kelishilgan foiz: 60%</p>
          </div>
          <div className="fine">
            <h5>Umumiy Jarimalari</h5>
            <Link>Dekabr-Yanvar</Link>
            <h1>1000.000 so'm</h1>
            <p>Jarimalar soni: 2ta</p>
          </div>
        </div>
      </div>

      <div className="payment_list">
        <div className="payment_container">
          <div className="payment_list_box">
            <p>O'quvchini ismi</p>
            <p>To'lov summasi</p>
            <p>To'lov sanasi</p>
            <p>Qaysi oyligi</p>
            <p>Shartnoma sanasi</p>
          </div>
        </div>
        <div className="payment_list_detail">
          <div className="payment_list_detail_box">
            <p>John doe Lemon</p>
            <p>100.000 so'm</p>
            <p>18/02/2024</p>
            <p>Dekabr</p>
            <p>
              17/09/2022
              <Tooltip
                title="Batafsil"
                placement="bottom"
                color="#52555A"
                trigger="hover"
              >
                <Button>
                  <PiInfoBold />
                </Button>
              </Tooltip>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
