import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import "./App.css";
import Dashboard from "./pages/Dashboard";
import "./assets/css/bootstrapDark.css";
import "./assets/css/appDark.css";
import "./assets/css/bootstrap.css";
import "./assets/css/app.css";
import "./assets/css/icon.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./components/userProfile";
import User from './components/User';
import jwtDecode from 'jwt-decode';
import { getAuthTokenFromLocalStorage } from './helpers/utils';
import { authenticateUser } from './actions/auth';
import React, { Component } from 'react';
import {connect} from 'react-redux';



const PrivateRoute=(privateRouteProps)=>{
  const{isLoggedIn,path,component:Component}=privateRouteProps;
  return(
    <Route path={path} render={(props)=>{
      return isLoggedIn?
      <Component {...props} />:
      <Redirect to={{
        pathname:'/login',
        state:{ 
          from:props.location,   //{pathname:'/settings'}
        },
      }}/>
    }}
    />
  );

}



class App extends Component {
  componentDidMount() {

    const token=getAuthTokenFromLocalStorage();
    if(token){
      const user=jwtDecode(token);
      // console.log(user);
      this.props.dispatch(authenticateUser(user));
    }
    
    
  }
  
  render() {
    const {auth}=this.props;
    return (
      <Router>
      <div>
        
          <Switch>
            <Route component={Dashboard} exact path="/" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <PrivateRoute component={UserProfile} path="/profile" isLoggedIn={auth.isLoggedIn}/>
            <PrivateRoute path="/user/:userId" component={User} isLoggedIn={auth.isLoggedIn}/>

            {/* <PrivateRoute  path="/profile" render={(props)=>{
              return <UserProfile {...props} dispatch={this.props.dispatch} isLoggedIn={auth.isLoggedIn}/>
            }}/> */}
          </Switch>
        
      </div>
      </Router>
    );
  }
}
function mapstatetoprops(state){
  return{
    auth:state.auth,
    user:state.user
  };
}


export default connect(mapstatetoprops)(App);


