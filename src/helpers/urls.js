const API_ROOT='http://192.168.1.37:8000/api';

export  const APIUrls={
    userProfile:(id)=>`${API_ROOT}/user/${id}`,
    login:()=>`${API_ROOT}/user/create-session`,
    signup:()=>`${API_ROOT}/users/signup`,
    editProfile:()=>`${API_ROOT}/users/edit`,
    userFollow:(followerId,followingId)=>`${API_ROOT}/connection/follow/${followerId}/${followingId}`,
    userUnfollow:(followerId,followingId)=>`${API_ROOT}/connection/unfollow/${followerId}/${followingId}`,
    createPost:()=>`${API_ROOT}/post/create`,
    deletePost:(id)=>`${API_ROOT}/post/delete/${id}`
    // userProfile:(userId)=>`${API_ROOT}/users/${userId}`,
    // userFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
	// addFriend: (userId) =>
	// 	`${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
	// removeFriendship: (userId) =>
	// 	`${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
   
    
}