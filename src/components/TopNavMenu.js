import React from "react";
import user from "../assets/images/users/user-1.jpg";
import user2 from "../assets/images/users/user-2.jpg";
import user3 from "../assets/images/users/user-3.jpg";
import user4 from "../assets/images/users/user-4.jpg";
import user5 from "../assets/images/users/user-5.jpg";
import user10 from "../assets/images/users/user-10.jpg";
import { Link } from "react-router-dom";
const TopNavMenu = () => {
  return (
    <div>
      {" "}
      <ul className="list-unstyled topnav-menu float-end mb-0">
        <li className="d-none d-lg-block">
          <form className="app-search">
            <div className="app-search-box">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  id="top-search"
                />
                <button className="btn input-group-text" type="submit">
                  <i className="fe-search"></i>
                </button>
              </div>
              <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                <div className="dropdown-header noti-title">
                  <h5 className="text-overflow mb-2">Found 22 results</h5>
                </div>

                <a href="#" className="dropdown-item notify-item">
                  <i className="fe-home me-1"></i>
                  <span>Analytics Report</span>
                </a>

                <a href="#" className="dropdown-item notify-item">
                  <i className="fe-aperture me-1"></i>
                  <span>How can I help you?</span>
                </a>

                <a href="#" className="dropdown-item notify-item">
                  <i className="fe-settings me-1"></i>
                  <span>User profile settings</span>
                </a>

                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                </div>

                <div className="notification-list">
                  <a href="#" className="dropdown-item notify-item">
                    <div className="d-flex align-items-start">
                      <img
                        className="d-flex me-2 rounded-circle"
                        src={user2}
                        alt="Generic placeholder image"
                        height="32"
                      />
                      <div className="w-100">
                        <h5 className="m-0 font-14">Erwin E. Brown</h5>
                        <span className="font-12 mb-0">UI Designer</span>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="dropdown-item notify-item">
                    <div className="d-flex align-items-start">
                      <img
                        className="d-flex me-2 rounded-circle"
                        src={user5}
                        alt="Generic placeholder image"
                        height="32"
                      />
                      <div className="w-100">
                        <h5 className="m-0 font-14">Jacob Deo</h5>
                        <span className="font-12 mb-0">Developer</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
        

        <li className="dropdown d-inline-block d-lg-none">
          <a
            className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="fe-search noti-icon"></i>
          </a>
          <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
            <form className="p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Recipient's username"
              />
            </form>
          </div>
        </li>
        

        <li className="dropdown notification-list topbar-dropdown">
          <a
            className="nav-link dropdown-toggle waves-effect waves-light"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="fe-bell noti-icon"></i>
            <span className="badge bg-danger rounded-circle noti-icon-badge">
              9
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-lg">
            <div className="dropdown-item noti-title">
              <h5 className="m-0">
                <span className="float-end">
                  <a href="" className="text-dark">
                    <small>Clear All</small>
                  </a>
                </span>
                Notification
              </h5>
            </div>

            <div className="noti-scroll" data-simplebar="init">
              <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: "0px", bottom: "0px" }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      tabIndex="0"
                      role="region"
                      aria-label="scrollable content"
                      style={{ height: "auto", overflow: "hidden" }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: "0px" }}
                      >
                        <a
                          href="#"
                          className="dropdown-item notify-item active"
                        >
                          <div className="notify-icon">
                            <img
                              src={user}
                              className="img-fluid rounded-circle"
                              alt=""
                            />{" "}
                          </div>
                          <p className="notify-details">Cristina Pride</p>
                          <p className="text-muted mb-0 user-msg">
                            <small>
                              Hi, How are you? What about our next meeting
                            </small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon bg-primary">
                            <i className="mdi mdi-comment-account-outline"></i>
                          </div>
                          <p className="notify-details">
                            Caleb Flakelar commented on Admin
                            <small className="text-muted">1 min ago</small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon">
                            <img
                              src={user4}
                              className="img-fluid rounded-circle"
                              alt=""
                            />{" "}
                          </div>
                          <p className="notify-details">Karen Robinson</p>
                          <p className="text-muted mb-0 user-msg">
                            <small>
                              Wow ! this admin looks good and awesome design
                            </small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon bg-warning">
                            <i className="mdi mdi-account-plus"></i>
                          </div>
                          <p className="notify-details">
                            New user registered.
                            <small className="text-muted">5 hours ago</small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon bg-info">
                            <i className="mdi mdi-comment-account-outline"></i>
                          </div>
                          <p className="notify-details">
                            Caleb Flakelar commented on Admin
                            <small className="text-muted">4 days ago</small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon bg-secondary">
                            <i className="mdi mdi-heart"></i>
                          </div>
                          <p className="notify-details">
                            Carlos Crouch liked
                            <b>Admin</b>
                            <small className="text-muted">13 days ago</small>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: "0px", height: "0px" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: "0px", display: "none" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ height: "0px", display: "none" }}
                ></div>
              </div>
            </div>

            <a
              href="#"
              className="dropdown-item text-center text-primary notify-item notify-all"
            >
              View all
              <i className="fe-arrow-right"></i>
            </a>
          </div>
        </li>

        <li className="dropdown notification-list topbar-dropdown">
          <Link
            className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
            data-bs-toggle="dropdown"
            to="/Login"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <img src={user} alt="user-image" className="rounded-circle" />
            <span className="pro-user-name ms-1">
              Nowak <i className="mdi mdi-chevron-down"></i>
            </span>
          </Link>
          <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome !</h6>
            </div>

            <a
              href="contacts-profile.html"
              className="dropdown-item notify-item"
            >
              <i className="fe-user"></i>
              <span>My Account</span>
            </a>

            <a
              href="auth-lock-screen.html"
              className="dropdown-item notify-item"
            >
              <i className="fe-lock"></i>
              <span>Lock Screen</span>
            </a>

            <div className="dropdown-divider"></div>

            <a href="auth-logout.html" className="dropdown-item notify-item">
              <i className="fe-log-out"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>

        <li className="dropdown notification-list">
          <a
            href="#"
            className="nav-link right-bar-toggle waves-effect waves-light"
          >
            <i className="fe-settings noti-icon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopNavMenu;
