import React from "react";

const RevenueStats = (props) => {
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

          <h4 className="header-title mt-0 mb-4">{props.name}</h4>

          <div className="widget-chart-1">
            <div className="widget-chart-box-1 float-start" dir="ltr">
              <span style={{ color: props.iconColor }}>
                <i className={`fa-3x fa-solid fa-${props.icon}`}></i>
              </span>
            </div>

            <div className="widget-detail-1 text-end">
              <h2 className="fw-normal pt-2 mb-1"> {props.number} </h2>
              <p className="text-muted mb-1">Revenue today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueStats;
