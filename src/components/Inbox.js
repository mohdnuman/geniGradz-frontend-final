import React from "react";
import user from "../assets/images/users/user-1.jpg";
import user2 from "../assets/images/users/user-2.jpg";
import user3 from "../assets/images/users/user-3.jpg";
import user4 from "../assets/images/users/user-4.jpg";
import user5 from "../assets/images/users/user-5.jpg";
const Inbox = () => {
  return (
    <div>
      <div className="card  my-0">
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

          <h4 className="header-title mb-3">Inbox</h4>

          <div className="inbox-widget">
            <div className="inbox-item">
              <a href="#">
                <div className="inbox-item-img">
                  <img src={user} className="rounded-circle" alt="/" />
                </div>
                <h5 className="inbox-item-author mt-0 mb-1">Chadengle</h5>
                <p className="inbox-item-text">Hey! there I'm available...</p>
                <p className="inbox-item-date">13:40 PM</p>
              </a>
            </div>

            <div className="inbox-item">
              <a href="#">
                <div className="inbox-item-img">
                  <img src={user2} className="rounded-circle" alt="/" />
                </div>
                <h5 className="inbox-item-author mt-0 mb-1">Tomaslau</h5>
                <p className="inbox-item-text">
                  I've finished it! See you so...
                </p>
                <p className="inbox-item-date">13:34 PM</p>
              </a>
            </div>

            <div className="inbox-item">
              <a href="#">
                <div className="inbox-item-img">
                  <img src={user3} className="rounded-circle" alt="/" />
                </div>
                <h5 className="inbox-item-author mt-0 mb-1">Stillnotdavid</h5>
                <p className="inbox-item-text">This theme is awesome!</p>
                <p className="inbox-item-date">13:17 PM</p>
              </a>
            </div>

            <div className="inbox-item">
              <a href="#">
                <div className="inbox-item-img">
                  <img src={user4} className="rounded-circle" alt="/" />
                </div>
                <h5 className="inbox-item-author mt-0 mb-1">Kurafire</h5>
                <p className="inbox-item-text">Nice to meet you</p>
                <p className="inbox-item-date">12:20 PM</p>
              </a>
            </div>

            <div className="inbox-item">
              <a href="#">
                <div className="inbox-item-img">
                  <img src={user5} className="rounded-circle" alt="/" />
                </div>
                <h5 className="inbox-item-author mt-0 mb-1">Shahedk</h5>
                <p className="inbox-item-text">Hey! there I'm available...</p>
                <p className="inbox-item-date">10:15 AM</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
