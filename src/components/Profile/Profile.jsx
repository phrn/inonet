import { Suspense } from "react";
import s from "../Profile/Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  
  return (
    <div className={s.content}>
      <ProfileInfo isOwner={props.isOwner} {...props} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;
