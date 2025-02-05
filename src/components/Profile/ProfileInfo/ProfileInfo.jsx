import userPhoto from "../../../userPhoto.jpg";
import s from "./ProfileInfo.module.css";
import bannerINO from "../../../bannerx.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { useState } from "react";
import { Form } from "react-router-dom";
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    const promise = saveProfile(formData);
    promise.then(() => {
      setEditMode(false);
    });
  };

  const goToEditMode = () => {
    setEditMode(true);
  };

  return (
    <div>
      <img src={bannerINO} alt="banner" className={s.banner_content} />
      <div className={s.wrapper}>
        <div className={s.photo}>
          <img
            src={profile.photos.large || userPhoto}
            alt="vrum-vrum"
            className={s.img_prof}
          />
          {isOwner && (
            <div>
              <input
                className={s.upload}
                type="file"
                accept="image/*"
                onChange={mainPhotoSelected}
              />
            </div>
          )}
          {isOwner && (
            <div>
              <button className={s.buttonX1} onClick={goToEditMode}>
                Edit profile
              </button>
            </div>
          )}
        </div>
        {editMode ? (
          <ProfileDataForm
            profile={profile}
            onSubmit={onSubmit}
            initialValues={profile}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            updateStatus={updateStatus}
            status={status}
          />
        )}
      </div>
    </div>
  );
}

const ProfileData = ({ profile, updateStatus, status }) => {
  return (
    <div>
      <div className={s.info_prof}>
        <p className={s.item}>Full Name: {profile.fullName}</p>
        <p className={s.status}>
          <b>
            <ProfileStatusWithHooks
              status={status}
              updateStatus={updateStatus}
            />
          </b>
        </p>
        <p className={s.item}>
          <b>About me: </b>
          {profile.aboutMe}
        </p>
        <p className={s.item}>
          <b>Looking for a job: </b>
          {profile.lookingForAJob ? "yes" : "no"}
          <p className={s.item}>
            <b>My skills: </b>
          </p>
          {profile.lookingForAJobDescription}
        </p>
        <a href=" #!" className={s.item}>
          <b>Contacts: </b>{" "}
          {Object.keys(profile.contacts).map((key) => (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          ))}
        </a>
      </div>
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
