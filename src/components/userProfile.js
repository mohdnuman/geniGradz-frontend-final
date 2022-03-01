import "../assets/css/userProfile.css";
import img from "../assets/images/logo-sm.png";
import img2 from "../assets/images/profile-post-1.jpg";
import { logout, createPost, deletePost } from "../actions/auth";
import { fetchUser } from "../actions/auth";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/css/bootstrapDark.css";
import "../assets/css/appDark.css";
import "../assets/css/bootstrap.css";
import "../assets/css/app.css";
import "../assets/css/icon.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followersActive: false,
      followingActive: false,
      postActive: false,
      certiActive: false,
    };
  }
  logOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logout());
  };
  componentDidMount() {
    console.log(this.props.auth.user._id);
    this.props.dispatch(fetchUser(this.props.auth.user._id));
  }
  handleFollowers = () => {
    this.setState({
      followersActive: true,
    });
  };
  handleFollowing = () => {
    this.setState({
      followingActive: true,
    });
  };
  handleCloseFollowers = () => {
    this.setState({
      followersActive: false,
    });
  };
  handleCloseFollowing = () => {
    this.setState({
      followingActive: false,
    });
  };
  handlePostPopup = () => {
    this.setState({
      postActive: true,
    });
    console.log(this.state);
  };
  handleClosePost = () => {
    this.setState({
      postActive: false,
    });
  };
  handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = new FormData();
    payload.append("avatar", formData.get("avatar"));
    payload.append("content", formData.get("content"));
    payload.append("userId", this.props.auth.user._id);
    this.props.dispatch(createPost(payload));
    this.handleClosePost();
  };
  handleCerificates = () => {
    this.setState({
      certiActive: true,
    });
  };
  handleCloseCertificates = () => {
    this.setState({
      certiActive: false,
    });
  };

  handleDelete=(id)=>{
    this.props.dispatch(deletePost(id));
  }
  render() {
    // console.log(this.props);
    const user = this.props.auth.user;
    const posts = this.props.auth.user.posts;
    return (
      <div>
        {this.state.followersActive && (
          <div id="followers-popup">
            <h1>Followers</h1>
            <div className="list">
              {user.followers.map((f) => (
                <div className="follower">
                  <img
                    src={"http://192.168.1.37:8000" + f.avatar}
                    alt={f.username}
                    width="30px"
                    height="30px"
                    style={{ borderRadius: "50%" }}
                    className="list-avatar"
                  />
                  <a href={"/user/" + f._id}>
                    <span className="follow-name">{f.username}</span>
                  </a>
                </div>
              ))}
            </div>
            <a
              href="#"
              onClick={this.handleCloseFollowers}
              className="close-button"
            >
              close
            </a>
          </div>
        )}
        {this.state.followingActive && (
          <div id="followers-popup">
            <h1>Following</h1>
            <div className="list">
              {user.following.map((f) => (
                <div className="follower">
                  <img
                    src={"http://192.168.1.37:8000" + f.avatar}
                    alt={f.username}
                    width="30px"
                    height="30px"
                    style={{ borderRadius: "50%" }}
                    className="list-avatar"
                  />
                  <a href={"/user/" + f._id}>
                    <span className="follow-name">{f.username}</span>
                  </a>
                </div>
              ))}
            </div>
            <a
              href="#"
              onClick={this.handleCloseFollowing}
              className="close-button"
            >
              close
            </a>
          </div>
        )}
        {this.state.postActive && (
          <div id="followers-popup">
            <h1 style={{ marginBottom: 20 }}>Create New Post</h1>
            <form
              action="/post/create"
              id="new-post-form"
              method="POST"
              encType="multipart/form-data"
              onSubmit={this.handlePost}
            >
              <input name="userId" value={this.props.auth.user._id} hidden />
              <textarea
                name="content"
                cols="30"
                rows="3"
                placeholder="Type here...."
                className="post-input"
              ></textarea>

              <input
                type="file"
                name="avatar"
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
              />
              <label htmlFor="contained-button-file">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/833/833281.png"
                  style={{ height: "30px", width: "30px", display: "block" }}
                  className="image-icon"
                />
              </label>

              <input type="submit" value="Post" className="post-button" />
            </form>

            <button onClick={this.handleClosePost} className="close-button">
              close
            </button>
          </div>
        )}
        {this.state.certiActive && (
          <div id="followers-popup">
            {" "}
            <button
              onClick={this.handleCloseCertificates}
              className="close-button"
            >
              {" "}
              Close
            </button>
          </div>
        )}
        <div className="top-row">
          <div className="row container">
            <div className="col-xl-2">{/* <img src={img} /> */}</div>
            <div className="col-xl-2 img-box">
              <img
                src={`http://192.168.1.37:8000${user.avatar}`}
                className="profile-image"
              />
              <p className="name-txt">{user.username}</p>
              <p className="sub-title-txt">Art & Social Activist</p>
              <button onClick={this.logOut} className="follow-button">
                logout
              </button>
              <button
                onClick={this.handlePostPopup}
                className="follow-button"
                style={{ marginTop: 10 }}
              >
                Create Post
              </button>
            </div>
            <div className="col-xl-5">
              <div className="certificates-container">
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2912/2912761.png"
                  className="certi-image"
                />{" "}
                <span
                  onClick={this.handleCerificates}
                  className="certificates-text"
                >
                  0 Certificates
                </span>
              </div>{" "}
              <div className="streaks-container">
                <span>0 streaks maintained</span>
              </div>
            </div>
            <div className="col-xl-3 post-section">
              <p style={{ color: "black" }}>
                Posts <b>{posts.length}</b>
              </p>
              <p style={{ color: "black" }}>
                <span className="followers" onClick={this.handleFollowers}>
                  Followers <b>{user.followers.length}</b>
                </span>
              </p>
              <p style={{ color: "black" }}>
                <span className="following" onClick={this.handleFollowing}>
                  Following <b>{user.following.length}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="top-second-row container-xxl">
          <div className="row">
            {posts.map((post) => (
              <div className="col-xl-4 col-sm-6" style={{ marginRight: "0"}}>
                <span style={{'fontWeight':'1000', 'position':'relative', 'top':-170}} onClick={()=>{this.handleDelete(post._id)}} className="delete-button">X</span>
                <img
                  src={`http://192.168.1.37:8000${post.avatar}`}
                  className="profile-post-img"
                  width="380px"
                />
              </div>
            ))}
          </div>
          <div className="" style={{ textAlign: "center" }}>
            <button className="load-more-btn">Check More Posts</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(UserProfile);
