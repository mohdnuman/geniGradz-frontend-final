import React from "react";

const Navcomponent = () => {
  return (
    <div>
      <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">
        <li>
          <button className="button-menu-mobile disable-btn waves-effect">
            <i className="fe-menu"></i>
          </button>
        </li>

        <li>
          <h4 className="page-title-main">Dashboard</h4>
        </li>
      </ul>

      <div className="clearfix"></div>
    </div>
  );
};

export default Navcomponent;
