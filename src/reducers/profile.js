import { USER_PROFILE_FAILED,USER_PROFILE_SUCCESSFUL,FETCH_USER_PROFILE,CLEAR_PROFILE_STATE, FOLLOW,UNFOLLOW } from "../actions/actionTypes";

const initialProfileState={
    user:{},
    error:null,
    success:null,
    inProgress:true,

}

export default function profile(state=initialProfileState,action){
    switch(action.type){
        case USER_PROFILE_SUCCESSFUL:
            const new_state={
                ...state,
                success:true,
                inProgress:false,
                user:action.user
            }
            return new_state;
        case USER_PROFILE_FAILED:
            return {
                ...state,
                error:action.error,
                inProgress:false
            }  
        case FETCH_USER_PROFILE:
            return {
                ...state,
                inProgress:true
            }
        case CLEAR_PROFILE_STATE:{
            return{
                ...state,
                 error:null
            }
        }
        case UNFOLLOW:{
            const followers=state.user.followers;
            const index=followers.indexOf((f)=>f._id===action.follower._id);
            followers.splice(index,1);
            const new_user=state.user;
            new_user.followers=followers;
            const new_state={
                ...state,
                user:new_user
            }
            return new_state;
        }
        case FOLLOW:{
            const followers=state.user.followers;
            followers.push(action.follower);
            const new_user=state.user;
            new_user.followers=followers;
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