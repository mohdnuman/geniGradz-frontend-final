import { Card, Container } from "@mui/material";

import { Link } from "react-router-dom";
import "../assets/css/Login.css";
import {login} from '../actions/auth';
import {connect} from 'react-redux';
import {clearAuthState} from '../actions/auth';
import {Redirect} from 'react-router-dom';

import React, { Component } from 'react';

class Login extends Component {

  handleSubmit = (event) => {
      const formData = new FormData(event.currentTarget);
      event.preventDefault();
      const email=formData.get('email');
      const password=formData.get('password');
      this.props.dispatch(login(email,password));
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  render() {
    const {error,inProgress,isLoggedIn}=this.props.auth;
    const { from } = this.props.location.state || {
			from: "/" 
		};
        if(isLoggedIn)
        {
            return <Redirect to={from} />
        }
    return (
      <div className="top">
        <Container>
          <div className="col-md-6 mx-auto">
            <Card className="card">
              <div className="signin-txt" style={{ textAlign: "center" }}>
                SIGN IN
              </div>
              <form onSubmit={this.handleSubmit}>
                <div style={{ margin: "1%" }}>
                  <label className="email-label">Email address</label>
                  <div style={{ textAlign: "center" }}>
                    <input
                      className="email-input"
                      type="text"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <label className="password-label">Password</label>
                  <div style={{ textAlign: "center" }}>
                    <input
                      className="password-input"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                  <input className="checkbox" type="checkbox" id="checkbox" />
                  Remember me <br />
                  {/* <div style={{ textAlign: "center" }}>
                    <button className="login-btn" type="submit">
                      log In
                    </button>
                  </div> */}
                  <div style={{ textAlign: "center" }}>
                {inProgress?<button type="submit"  className="login-btn" onClick={this.handleSubmit} disabled={inProgress}>Logging In...</button>:
                 <button type="submit" className="login-btn" onClick={this.handleSubmit}>Log In</button>
                }
             </div>
                  <div
                    className=""
                    style={{
                      textAlign: "right",
                      marginRight: "3.5rem",
                      marginBottom: "2rem",
                    }}
                  >
                    Not Register Yet?<Link to="/register">Register</Link>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      auth:state.auth,
  };
}

export default connect(mapStateToProps)(Login);





