import React, { useEffect, useRef, useState } from "react";
import "./Dashboard.css";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "antd";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Chart } from "chart.js/auto";

function Dashboard() {
  const [chartData, setChartData] = useState({
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
      colors: ["#0968C0", "#EC3D33"],
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
          format: "dd/MM/yy",
        },
      },
    },
  });

  const chartRef = useRef(null); // Chart uchun canvas yaratish

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d"); // Canvas konteksti

    // Ma'lumotlarni aniqlash
    const data = {
      labels: ["Kelganlar", "Kelmaganlar"],
      datasets: [
        {
          label: "kelganlar, kelmaganlar",
          data: [300, 50],
          backgroundColor: ["rgba(250, 202, 199, 1)", "#EF4136"],
          hoverOffset: 4,
        },
      ],
    };

    // Chart.js obyektini yaratish
    const doughnutChart = new Chart(ctx, {
      type: "doughnut", // Chart turi
      data: data, // Chart ma'lumotlari
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // Componentdan chiqqanda chartni tozalash
    return () => {
      doughnutChart.destroy();
    };
  }, []);

  return (
    <div className="dashboard">
      <h1>Boshqaruv</h1>
      <div className="dashboard-statistics">
        <div className="students-flow">
          <div className="desc-flow-students">
            <h2 className="statistics-title">O’quvchilar oqimi</h2>
          </div>
          <div className="donut-chart">
            {/* chart.js  chart */}
            <canvas ref={chartRef}></canvas> {/* Canvas elementi */}
          </div>
          <div className="index-flow-in-number">
            <div className="box-container">
              <div className="red-ind-box"></div>
              <span>Kelmaganlar</span>
            </div>
            <p>{66}ta</p>
          </div>
          <div className="index-flow-in-number">
            <div className="box-container">
              <div className="red-ind-box"></div>
              <span>Kelganlar</span>
            </div>
            <p>{129}ta</p>
          </div>
        </div>
        <div className="pay-and-payments">
          <div className="desc-pay-payments">
            <h2 className="statistics-title">Oylik maosh va to’lovlar</h2>
          </div>
          <ReactApexChart
            className="apexChart"
            series={chartData.series}
            options={chartData.options}
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
                <Link to={"/"}>
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
                <Link to={"/"}>
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
                <Link to={"/"}>
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
                <Link to={"/"}>
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
