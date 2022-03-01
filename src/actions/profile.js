import { USER_PROFILE_FAILED,USER_PROFILE_SUCCESSFUL,FETCH_USER_PROFILE,CLEAR_PROFILE_STATE,FOLLOW,UNFOLLOW } from "./actionTypes";
import { APIUrls } from "../helpers/urls";

export function userProfileSuccess(user){
    return{
        type:USER_PROFILE_SUCCESSFUL,
        user
    }
}
export function userProfileFailed(error){
    return{
        type:USER_PROFILE_FAILED,
        error
    }
}
export function fetchUserProfileStart(){
    return {
        type:FETCH_USER_PROFILE,
    }
}
export function fetchUser(userId){
    return(dispatch)=>{
        dispatch(fetchUserProfileStart());
        const url=APIUrls.userProfile(userId);
        fetch(url,{
            method:'GET',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.success){
                dispatch(userProfileSuccess(data.data.user));
                return;
            }
            dispatch(userProfileFailed(data.message));
        });
    }

}
export function clearProfileState(){
    return{
        type:CLEAR_PROFILE_STATE
    }
}

export function follow(follower,following){
    return(dispatch)=>{
        const url=APIUrls.userFollow(follower,following);
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.success){
                dispatch(addFollower(data.data.user));
                return;
            }
        });
    }
}

export function addFollower(follower){
    return{
        type:FOLLOW,
        follower:follower
    }
}

export function unfollow(follower,following){
    return(dispatch)=>{
        const url=APIUrls.userUnfollow(follower,following);
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.success){
                dispatch(removeFollower(data.data.user));
                return;
            }
        });
    }
}

export function removeFollower(follower){
    return{
        type:UNFOLLOW,
        follower:follower
    }
}