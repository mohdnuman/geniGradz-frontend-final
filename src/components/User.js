import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser,clearProfileState,unfollow,follow} from '../actions/profile'
import { logout } from "../actions/auth";

class User extends Component {
    constructor(props){
        super(props);
        this.state={
          followersActive: false,
          followingActive: false,
        }
    }
    async componentDidMount() {
        await this.props.dispatch(fetchUser(this.props.match.params.userId));
        this.setState({
            inProgress:false
        });
    }
    
    componentWillUnmount() {
        this.props.dispatch(clearProfileState());
      
    }
    handleFollowers = () => {
      this.setState({
        followersActive: true,
      });
      console.log(this.state);
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
    handleFollow=()=>{
      this.props.dispatch(follow(this.props.auth.user._id,this.props.profile.user._id));
    }
    handleUnfollow=()=>{
      this.props.dispatch(unfollow(this.props.auth.user._id,this.props.profile.user._id));
    }
    logOut = () => {
      localStorage.removeItem("token");
      this.props.dispatch(logout());
    };
    checkIfUserIsFollowed=()=>{
      const followers=this.props.profile.user.followers;
      const index=followers.map((u)=>u._id).indexOf(this.props.auth.user._id);
      if(index!==-1){
        return true;
      }
      else{
        return false;
      }
    }
    render() {
        if(this.props.profile.inProgress){
            return(<div>loading...</div>);
        }
        return (
            <div>
                {this.state.followersActive && (
                  
          <div id="followers-popup">
            <h1>Followers</h1>
            <div className="list">
              {this.props.profile.user.followers.map((f) => (
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
              {this.props.profile.user.following.map((f) => (
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
      
              <div className="top-row">
                <div className="row container">
                  <div className="col-xl-2">{/* <img src={img} /> */}</div>
                  <div className="col-xl-2 img-box">
                    <img src={`http://192.168.1.37:8000${this.props.profile.user.avatar}`} className="profile-image"/>
                    <p className="name-txt">{this.props.profile.user.username}</p>
                    <p className="sub-title-txt">Art & Social Activist</p>
                    {this.props.match.params.userId!==this.props.auth.user._id&&!this.checkIfUserIsFollowed()&&<button onClick={this.handleFollow} className="follow-button">FOLLOW</button>}
                    {this.props.match.params.userId!==this.props.auth.user._id&&this.checkIfUserIsFollowed()&&<button onClick={this.handleUnfollow} className="follow-button">UNFOLLOW</button>}
                    {this.props.match.params.userId===this.props.auth.user._id&&<button onClick={this.logOut} className="follow-button">logout</button>}
                    {/* {this.props.match.params.userId===this.props.auth.user._id&&<button onClick={this.logOut} className="follow-button">Create Post</button>} */}

                  </div>
                  <div className="col-xl-5"></div>
                  <div className="col-xl-3 post-section">
                    <p style={{ color: "black" }}>
                      Posts <b>{this.props.profile.user.posts.length}</b>
                    </p>
                    <p style={{ color: "black" }}>
                      <span className="followers" onClick={this.handleFollowers}>Followers <b>{this.props.profile.user.followers.length}</b></span>
                    </p>
                    <p style={{ color: "black" }}>
                      <span className="following" onClick={this.handleFollowing}>Following <b>{this.props.profile.user.following.length}</b></span>
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="top-second-row container-xxl">
                <div className="row">
                  {this.props.profile.user.posts.map((post) => (
                    <div className="col-xl-4 col-sm-6" style={{ marginRight: "0" }}>
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
      profile:state.profile
    };
  }
  
  export default connect(mapstatetoprops)(User);