import React from "react";
import ReactApexChart from "react-apexcharts";
const statobj = {
  series: [
    {
      // data: [21, 22, 10, 28, 16, 21, 13, 30],
      data: [5, 2, 10, 8, 7, 2, 3, 9],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: [
      "rgba(0, 143, 251, 0.85)",
      "rgba(0, 227, 150, 0.85)",
      "rgba(254, 176, 25, 0.85)",
      "rgba(255, 69, 96, 0.85)",
      "rgba(119, 93, 208, 0.85)",
      "rgba(119, 93, 208, 0.85)",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Day", "1"],
        ["Day", "2"],
        ["Day", "3"],

        ["Day", "4"],
        ["Day", "5"],
        ["Day", "6"],
        ["Day", "7"],
      ],
      labels: {
        style: {
          colors: [
            "rgba(0, 143, 251, 0.85)",
            "rgba(0, 227, 150, 0.85)",
            "rgba(254, 176, 25, 0.85)",
            "rgba(255, 69, 96, 0.85)",
            "rgba(119, 93, 208, 0.85)",
            "rgba(119, 93, 208, 0.85)",
          ],
          fontSize: "12px",
        },
      },
    },
  },
};
const Stats = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a
              href="#"
              className="dropdown-toggle arrow-none card-drop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="mdi mdi-dots-vertical"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a href="#" className="dropdown-item">
                Action
              </a>

              <a href="#" className="dropdown-item">
                Another action
              </a>

              <a href="#" className="dropdown-item">
                Something else
              </a>

              <a href="#" className="dropdown-item">
                Separated link
              </a>
            </div>
          </div>
          <h4 className="header-title mt-0">Statistics</h4>
          <ReactApexChart
            options={statobj.options}
            series={statobj.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
