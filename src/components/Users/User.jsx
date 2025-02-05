import s from "../Users/Users.module.css";
import React from "react";
import userPhoto from "./../../userPhoto.jpg";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <div className={s.wrapper} key={user.index}>
        <span className={s.photobtn}>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className={s.usersPhoto}
                alt="avatar"
              />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                className={s.btn}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                className={s.btn}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span>
          <div className={s.text}>{user.name}</div>
          <div className={s.text}>{user.status}</div>
        </span>
        <span>
          <div className={s.text}>{"user.location.country"}</div>
          <div className={s.text}>{"user.location.city"}</div>
        </span>
      </div>
    </div>
  );
};
export default User;
