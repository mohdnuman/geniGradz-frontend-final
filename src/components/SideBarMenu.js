import React from "react";
import user from "../assets/images/users/user-1.jpg";
import { Accordion } from "react-bootstrap";
const SideBarMenu = () => {
  return (
    <div>
      <div className="h-100 menuitem-active" data-simplebar="init">
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
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div className="simplebar-content" style={{ padding: "0px" }}>
                  <div className="user-box text-center">
                    <img
                      src={user}
                      alt="user-img"
                      title="Mat Helme"
                      className="rounded-circle img-thumbnail avatar-md"
                    />
                    <div className="dropdown">
                      <a
                        href="#"
                        className="user-name dropdown-toggle h5 mt-2 mb-1 d-block"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Nowak Helme
                      </a>
                      <div className="dropdown-menu user-pro-dropdown">
                        <a href="#" className="dropdown-item notify-item">
                          <i className="fe-user me-1"></i>
                          <span>My Account</span>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <i className="fe-settings me-1"></i>
                          <span>Settings</span>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <i className="fe-lock me-1"></i>
                          <span>Lock Screen</span>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <i className="fe-log-out me-1"></i>
                          <span>Logout</span>
                        </a>
                      </div>
                    </div>

                    <p className="text-muted left-user-info">Admin Head</p>

                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="text-muted left-user-info">
                          <i className="mdi mdi-cog"></i>
                        </a>
                      </li>

                      <li className="list-inline-item">
                        <a href="#">
                          <i className="mdi mdi-power"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="sidebar-menu" className="show">
                    <ul id="side-menu">
                      <li className="menu-title">Navigation</li>

                      <li className="menuitem-active">
                        <a href="index.html" className="active">
                          <i className="mdi mdi-view-dashboard-outline"></i>
                          <span className="badge bg-success rounded-pill float-end">
                            9+
                          </span>
                          <span> Dashboard </span>
                        </a>
                      </li>

                      <li className="menu-title mt-2">Apps</li>

                      <li>
                        <a href="apps-calendar.html">
                          <i className="mdi mdi-calendar-blank-outline"></i>
                          <span> Calendar </span>
                        </a>
                      </li>

                      <li>
                        <a href="apps-chat.html">
                          <i className="mdi mdi-forum-outline"></i>
                          <span> Chat </span>
                        </a>
                      </li>
                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header>
                            <i
                              className="mdi mdi-email-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Email
                          </Accordion.Header>

                          <Accordion.Body>Inbox</Accordion.Body>
                          <Accordion.Body>Email Template</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-clipboard-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Tasks
                          </Accordion.Header>
                          <Accordion.Body>Kanban Board</Accordion.Body>
                          <Accordion.Body>Details</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <li>
                        <a href="apps-projects.html">
                          <i className="mdi mdi-briefcase-variant-outline"></i>
                          <span> Projects </span>
                        </a>
                      </li>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-book-open-page-variant-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Tasks
                          </Accordion.Header>
                          <Accordion.Body>Member List</Accordion.Body>
                          <Accordion.Body>Profile</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <li className="menu-title mt-2">Custom</li>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-account-multiple-plus-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Auth Pages
                          </Accordion.Header>
                          <Accordion.Body>Login</Accordion.Body>
                          <Accordion.Body>Register</Accordion.Body>
                          <Accordion.Body>Recover Password</Accordion.Body>
                          <Accordion.Body>Lock Screen</Accordion.Body>
                          <Accordion.Body>Confirm Mail</Accordion.Body>
                          <Accordion.Body>Logout</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-file-multiple-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Extra Pages
                          </Accordion.Header>
                          <Accordion.Body>Stater</Accordion.Body>
                          <Accordion.Body>Pricing</Accordion.Body>
                          <Accordion.Body>Timeline</Accordion.Body>
                          <Accordion.Body>Invoice</Accordion.Body>
                          <Accordion.Body>FAQs</Accordion.Body>
                          <Accordion.Body>Gallery</Accordion.Body>
                          <Accordion.Body>Error 404</Accordion.Body>
                          <Accordion.Body>Error 505</Accordion.Body>
                          <Accordion.Body>Maintainance</Accordion.Body>
                          <Accordion.Body>Coming Soon</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-dock-window"
                              style={{ marginRight: "1rem" }}
                            />
                            Layouts
                          </Accordion.Header>
                          <Accordion.Body>Horizontal</Accordion.Body>
                          <Accordion.Body>Preloder</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <li className="menu-title mt-2">Components</li>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-briefcase-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Base UI
                          </Accordion.Header>
                          <Accordion.Body>Buttons</Accordion.Body>
                          <Accordion.Body>Cards</Accordion.Body>
                          <Accordion.Body>Avatar</Accordion.Body>
                          <Accordion.Body>Tabs & Accordions</Accordion.Body>
                          <Accordion.Body>Models</Accordion.Body>
                          <Accordion.Body>Progress</Accordion.Body>
                          <Accordion.Body>Notifications</Accordion.Body>
                          <Accordion.Body>Offcanvas</Accordion.Body>
                          <Accordion.Body>Placeholders</Accordion.Body>
                          <Accordion.Body>Spinners</Accordion.Body>
                          <Accordion.Body>Images</Accordion.Body>
                          <Accordion.Body>Carousel</Accordion.Body>
                          <Accordion.Body>Embed Video</Accordion.Body>
                          <Accordion.Body>Dropdowns</Accordion.Body>
                          <Accordion.Body>Tooltips & Popovers</Accordion.Body>
                          <Accordion.Body>General UI</Accordion.Body>
                          <Accordion.Body>Typography</Accordion.Body>
                          <Accordion.Body>Grid</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <li>
                        <a href="widgets.html">
                          <i className="mdi mdi-gift-outline"></i>
                          <span> Widgets </span>
                        </a>
                      </li>

                      <li>
                        <a href="#sidebarExtendedui" data-bs-toggle="collapse">
                          <i className="mdi mdi-layers-outline"></i>
                          <span className="badge bg-info float-end">Hot</span>
                          <span> Extended UI </span>
                        </a>
                        <div className="collapse" id="sidebarExtendedui">
                          <ul className="nav-second-level">
                            <li>
                              <a href="extended-range-slider.html">
                                Range Slider
                              </a>
                            </li>
                            <li>
                              <a href="extended-sweet-alert.html">
                                Sweet Alert
                              </a>
                            </li>
                            <li>
                              <a href="extended-draggable-cards.html">
                                Draggable Cards
                              </a>
                            </li>
                            <li>
                              <a href="extended-tour.html">Tour Page</a>
                            </li>
                            <li>
                              <a href="extended-notification.html">
                                Notification
                              </a>
                            </li>
                            <li>
                              <a href="extended-treeview.html">Tree View</a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-shield-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Icons
                          </Accordion.Header>
                          <Accordion.Body>Feather Icons</Accordion.Body>
                          <Accordion.Body>Material Design Icons</Accordion.Body>
                          <Accordion.Body>Dripicons</Accordion.Body>
                          <Accordion.Body>Font Awesome 5</Accordion.Body>
                          <Accordion.Body>Themify</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-texture"
                              style={{ marginRight: "1rem" }}
                            />
                            Forms
                          </Accordion.Header>
                          <Accordion.Body>General Elements</Accordion.Body>
                          <Accordion.Body>Advanced</Accordion.Body>
                          <Accordion.Body>Validation</Accordion.Body>
                          <Accordion.Body>Wizard</Accordion.Body>
                          <Accordion.Body>Quilis Editor</Accordion.Body>
                          <Accordion.Body>Picker</Accordion.Body>
                          <Accordion.Body>File Uploads</Accordion.Body>
                          <Accordion.Body>X Editable</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-table"
                              style={{ marginRight: "1rem" }}
                            />
                            Tables
                          </Accordion.Header>
                          <Accordion.Body>Basics Tables</Accordion.Body>
                          <Accordion.Body>Data Tables</Accordion.Body>
                          <Accordion.Body>Editable Tables</Accordion.Body>
                          <Accordion.Body>Responsive Tables</Accordion.Body>
                          <Accordion.Body>TablesawTables</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-chart-donut-variant"
                              style={{ marginRight: "1rem" }}
                            />
                            Charts
                          </Accordion.Header>
                          <Accordion.Body>Flot Charts</Accordion.Body>
                          <Accordion.Body>Morris Charts</Accordion.Body>
                          <Accordion.Body>Chartjs Charts</Accordion.Body>
                          <Accordion.Body>Chatist Charts</Accordion.Body>
                          <Accordion.Body>Sparkline Charts</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-map-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Maps
                          </Accordion.Header>
                          <Accordion.Body>Google Maps</Accordion.Body>
                          <Accordion.Body>Vector Maps</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-share-variant"
                              style={{ marginRight: "1rem" }}
                            />
                            Multi Level
                          </Accordion.Header>
                          <Accordion.Body>Second Level</Accordion.Body>
                          <Accordion.Body>Third Level</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </ul>
                  </div>

                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "auto", height: "1272px" }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              width: "0px",
              display: "none",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          ></div>
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: "294px",
              transform: "translate3d(0px, 0px, 0px)",
              display: "block",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
