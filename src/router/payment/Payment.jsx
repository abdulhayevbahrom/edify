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
      <table>
        <thead>
            <tr>
                <th>O'quvchi ismi</th>
                <th>To'lov summasi</th>
                <th>To'lov sanasi</th>
                <th>Qaysi oyligi</th>
                <th>shartnoma sanasi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Olimo hasan</td>
                <td>500,000 so'm</td>
                <td>2025-01-10</td>
                <td>Yanvar</td>
                <td>2024-12-20
                <Link>
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
              </Link>
              </td>
            </tr>
            <tr>
                <td>Karimova Madina</td>
                <td>700,000 so'm</td>
                <td>2025-01-11</td>
                <td>Yanvar</td>
                <td>2024-12-20
                  <Link>
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
                </Link>
              </td>
            </tr>
            <tr>
                <td>Yusupov Anvar</td>
                <td>600,000 so'm</td>
                <td>2025-01-12</td>
                <td>Yanvar</td>
                <td>2024-12-20
                  <Link>
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
                </Link> 
              </td>
              </tr>
          </tbody>
      </table>          
          
        
      </div>
    </div>
  );
}

export default Payment;
