import React from "react";
import ReactApexChart from "react-apexcharts";

const object = {
  series: [70, 67, 61, 90],
  options: {
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    labels: ["project1", "project2", "project3", "project4"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "right",
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  },
};
const DailySale = () => {
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

          <h4 className="header-title mt-0">Daily Sales</h4>

          <div className="widget-chart text-center">
            <ReactApexChart
              options={object.options}
              series={object.series}
              type="radialBar"
              height={390}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySale;
