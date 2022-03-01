import { Card, Container } from "@mui/material";
import React from "react";

const Register = () => {
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    <div>
      <div className="top">
        <Container>
          <div className="col-md-6 mx-auto">
            <Card className="card">
              <div className="signin-txt" style={{ textAlign: "center" }}>
                REGISTER
              </div>
              <form onSubmit={handleSubmit}>
                <div style={{ margin: "1%" }}>
                  <label className="email-label">Name</label>
                  <div style={{ textAlign: "center" }}>
                    <input
                      className="email-input"
                      type="text"
                      name="Name :"
                      placeholder="Enter Full Name"
                      required
                    />
                  </div>
                  <label
                    className="email-label"
                    style={{ marginTop: "1.5rem" }}
                  >
                    Email
                  </label>
                  <div style={{ textAlign: "center" }}>
                    <input
                      className="email-input"
                      type="email"
                      name="Email :"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <label className="password-label">Password</label>
                  <div style={{ textAlign: "center" }}>
                    <input
                      className="password-input"
                      type="password"
                      name="Password :"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                  <input className="checkbox" type="checkbox" id="checkbox" />I
                  agree all statements in Term & Condition
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <button className="login-btn" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;
