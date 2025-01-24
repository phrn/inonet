import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import {
  setUserProfile,
  getStatus,
  updateStatus,
} from "./../../redux/profile-reducer";

function ProfileContainer(props) {
  let { userId } = useParams();
  if (!userId) {
    userId = props.authorizedUserId;
    
  }

  useEffect(() => {
    // const getUser = async () => {
    //   const user = await profileAPI.getProfile(userId)
    //   props.setUserProfile(user.data)
    //   props.getStatus(userId)
    // } // async await

    if (userId) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then((response) => {
          props.setUserProfile(response.data);
          props.getStatus(userId);
        });
      // getUser()
    }
  }, [userId]);
  if (!props.isAuth) return <Navigate to="/login" />;
  return (
    <div>
      <Profile
        {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  setUserProfile,
  getStatus,
  updateStatus,
})(ProfileContainer);
