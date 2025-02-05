import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { setUserProfile, getStatus, savePhoto, updateStatus, saveProfile } from "./../../redux/profile-reducer";

function ProfileContainer(props) {
  let { userId } = useParams();

  if (!userId) {
    userId = props.authorizedUserId;
  }

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProfileData = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
          );
          props.setUserProfile(response.data);
          props.getStatus(userId);
        } catch (error) {
          console.error("Ошибка при выборе профиля:", error);
        }
       finally {
        setLoading(false);
      }
      } else {
        navigate("/login");
      }
    };

    fetchProfileData();
  }, [userId]);

  if (!props.isAuth) return <Navigate to="/login" />;
  const isOwner = userId === props.authorizedUserId;
  return (
    <div>
      <Profile
        isOwner={isOwner}
        {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  setUserProfile,
  getStatus, updateStatus, savePhoto, saveProfile
})(ProfileContainer);
