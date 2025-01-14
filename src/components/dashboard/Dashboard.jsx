import React from "react";
import "./Dashboard.css";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "antd";
import { IoInformationCircleOutline } from "react-icons/io5";

function Dashboard() {
  const [state, setState] = React.useState({
    series: [
      {
        name: "To'lovlar soni",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Oylik maosh",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="dashboard">
      <h1>Boshqaruv</h1>
      <div className="dashboard-statistics">
        <div className="students-flow">
          <div className="desc-flow-students">
            <h2 className="statistics-title">O’quvchilar oqimi</h2>
          </div>
        </div>
        <div className="pay-and-payments">
          <div className="desc-pay-payments">
            <h2 className="statistics-title">Oylik maosh va to’lovlar</h2>
          </div>
          <ReactApexChart
            className="apexChart"
            series={state.series}
            options={state.options}
            type="area"
            height={350}
          />
        </div>
        <div className="dashboard-messages">
          <div className="desc-dashboard-msg">
            <h2 className="statistics-title">Xabarlar</h2>
          </div>
          <div className="dashboard-msg-container">
            <div className="msg-item">
              <p>
                Xamma xodimlarga yig’ilish. Soat 12:00 dan 14:00 gacha.
                O’qituvchilar (Staff) xonasida.
              </p>
            </div>
            <div className="msg-item">
              <p>
                Xamma xodimlarga yig’ilish. Soat 12:00 dan 14:00 gacha.
                O’qituvchilar (Staff) xonasida. Xamma xodimlarga yig’ilish. Soat
                12:00 dan 14:00 gacha. O’qituvchilar (Staff) xonasida.Xamma
                xodimlarga yig’ilish. Soat 12:00 dan 14:00 gacha. O’qituvchilar
                (Staff) xonasida.
              </p>
            </div>
            <div className="msg-item">
              <p>
                Xamma xodimlarga yig’ilish. Soat 12:00 dan 14:00 gacha.
                O’qituvchilar (Staff) xonasida.
              </p>
            </div>{" "}
            <div className="msg-item">
              <p>
                Xamma xodimlarga yig’ilish. Soat 12:00 dan 14:00 gacha.
                O’qituvchilar (Staff) xonasida.
              </p>
            </div>{" "}
            <div className="msg-item">
              <p>
                Xamma xodimlarga yig’ilish. Soat 12:00 dan 14:00 gacha.
                O’qituvchilar (Staff) xonasida.
              </p>
            </div>{" "}
            <div className="msg-item">
              <p>
                Xamma xodimlarga yig’ilish. Soat 12:00 dan 14:00 gacha.
                O’qituvchilar (Staff) xonasida.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="teachers-info-index">
        <table>
          <thead>
            <tr>
              <th>O’qtuvchi ismi</th>
              <th>O’rtacha oylik maoshi</th>
              <th>Guruhlari soni</th>
              <th>O’quvchilari soni</th>
              <th>To’lov qilmaganlar soni</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe Lemoni</td>
              <td>{12000000} so'm</td>
              <td>{10} ta</td>
              <td>{116} ta</td>
              <td>
                {16} ta
                <Link>
                  <Tooltip
                    title="Batafsil"
                    placement="bottom"
                    color="#52555A"
                    trigger="hover"
                  >
                    <Button>
                      <IoInformationCircleOutline />
                    </Button>
                  </Tooltip>
                </Link>
              </td>
            </tr>
            <tr>
              <td>John Doe Lemoni</td>
              <td>{12000000} so'm</td>
              <td>{10} ta</td>
              <td>{116} ta</td>
              <td>
                {16} ta
                <Link>
                  <Tooltip
                    title="Batafsil"
                    placement="bottom"
                    color="#52555A"
                    trigger="hover"
                  >
                    <Button>
                      <IoInformationCircleOutline />
                    </Button>
                  </Tooltip>
                </Link>
              </td>
            </tr>{" "}
            <tr>
              <td>John Doe Lemoni</td>
              <td>{12000000} so'm</td>
              <td>{10} ta</td>
              <td>{116} ta</td>
              <td>
                {16} ta
                <Link>
                  <Tooltip
                    title="Batafsil"
                    placement="bottom"
                    color="#52555A"
                    trigger="hover"
                  >
                    <Button>
                      <IoInformationCircleOutline />
                    </Button>
                  </Tooltip>
                </Link>
              </td>
            </tr>{" "}
            <tr>
              <td>John Doe Lemoni</td>
              <td>{12000000} so'm</td>
              <td>{10} ta</td>
              <td>{116} ta</td>
              <td>
                {16} ta
                <Link>
                  <Tooltip
                    title="Batafsil"
                    placement="bottom"
                    color="#52555A"
                    trigger="hover"
                  >
                    <Button>
                      <IoInformationCircleOutline />
                    </Button>
                  </Tooltip>
                </Link>
              </td>
            </tr>{" "}
            <tr>
              <td>John Doe Lemoni</td>
              <td>{12000000} so'm</td>
              <td>{10} ta</td>
              <td>{116} ta</td>
              <td>
                {16} ta
                <Link>
                  <Tooltip
                    title="Batafsil"
                    placement="bottom"
                    color="#52555A"
                    trigger="hover"
                  >
                    <Button>
                      <IoInformationCircleOutline />
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

export default Dashboard;
