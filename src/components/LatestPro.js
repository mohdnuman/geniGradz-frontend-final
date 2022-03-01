import React from "react";

const LatestPro = () => {
  return (
    <div>
      <div className="card my-0">
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

          <h4 className="header-title mt-0 mb-3">Latest Projects</h4>

          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Start Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Assign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Adminto Admin v1</td>
                  <td>01/01/2017</td>
                  <td>26/04/2017</td>
                  <td>
                    <span className="badge bg-danger">Released</span>
                  </td>
                  <td>Coderthemes</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Adminto Frontend v1</td>
                  <td>01/01/2017</td>
                  <td>26/04/2017</td>
                  <td>
                    <span className="badge bg-success">Released</span>
                  </td>
                  <td>Adminto admin</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Adminto Admin v1.1</td>
                  <td>01/05/2017</td>
                  <td>10/05/2017</td>
                  <td>
                    <span className="badge bg-pink">Pending</span>
                  </td>
                  <td>Coderthemes</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Adminto Frontend v1.1</td>
                  <td>01/01/2017</td>
                  <td>31/05/2017</td>
                  <td>
                    <span className="badge bg-purple">Work in Progress</span>
                  </td>
                  <td>Adminto admin</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Adminto Admin v1.3</td>
                  <td>01/01/2017</td>
                  <td>31/05/2017</td>
                  <td>
                    <span className="badge bg-warning">Coming soon</span>
                  </td>
                  <td>Coderthemes</td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>Adminto Admin v1.3</td>
                  <td>01/01/2017</td>
                  <td>31/05/2017</td>
                  <td>
                    <span className="badge bg-primary">Coming soon</span>
                  </td>
                  <td>Adminto admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPro;
