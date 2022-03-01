import {LOGIN_START,LOGIN_SUCCESS,LOGIN_FAILED,SIGNUP_FAILED,SIGNUP_START,SIGNUP_SUCCESS, AUTHENTICATE_USER, LOG_OUT, CLEAR_AUTH_STATE, EDIT_USER_SUCCESSFUL, EDIT_USER_FAILED, UPDATE_POSTS, UPDATE_USER, ADD_POST, REMOVE_POST} from '../actions/actionTypes';

const initialAUthState={
    user:{},
    error:null,
    isLoggedIn:false,
    inProgress:false
}

export default function auth(state=initialAUthState,action){
    switch(action.type){
        case LOGIN_START:{
            return{
                ...state,
                inProgress:true, 
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,
                user:action.user,
                isLoggedIn:true,
                inProgress:false,
                error:null
            }
        } 
        case LOGIN_FAILED:{
            return{
                ...state,
                inProgress:false,
                error:action.error
            }
        }
        case SIGNUP_START:{
            return{
                ...state,
                inProgress:true, 
            }
        }
        case SIGNUP_SUCCESS:{
            return {
                ...state,
                user:action.user,
                isLoggedIn:true,
                inProgress:false,
                error:null
            }
        } 
        case SIGNUP_FAILED:{
            return{
                ...state,
                inProgress:false,
                error:action.error
            }
        }
        case AUTHENTICATE_USER:{
            return{
                ...state,
                user:action.user,
                isLoggedIn:true
            }
        }
        case LOG_OUT:{
            return {
                ...state,
                user:{},
                isLoggedIn:false
            }
        }
        case CLEAR_AUTH_STATE:{
            return{
                ...state,
                error:null
            }
        }
        case EDIT_USER_SUCCESSFUL:{
            return{
                ...state,
                user:action.user,
                error:false
            }
        }
        case EDIT_USER_FAILED:{
            return{
                ...state,
                error:action.error
            }
        }
        case UPDATE_USER:{
            return{
                ...state,
                user:action.user
            }
        }
        case ADD_POST:{
            const new_user=state.user;
            new_user.posts.push(action.post);
            return{
                ...state,
                user:new_user
            }
        }
        case REMOVE_POST:{
            const posts=state.user.posts;
            var i = 0;
            while (i < posts.length) {
              if (posts[i]._id === action.id) {
                posts.splice(i, 1);
              } else {
                ++i;
              }
            }
            const new_user=state.user;
            new_user.posts=posts;
            const new_state={
                ...state,
                user:new_user
            }
            return new_state;
        }

        default:
            return state;    

    }
}