import React from "react";

const Profile = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body widget-user">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 avatar-lg me-3">
              <img
                src={props.image}
                className="img-fluid rounded-circle"
                alt="user"
              />
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <h5 className="mt-0 mb-1">{props.name}</h5>
              <p className="text-muted mb-2 font-13 text-truncate">
                coderthemes@gmail.com
              </p>
              <small className="text-warning">
                <b>{props.role}</b>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
