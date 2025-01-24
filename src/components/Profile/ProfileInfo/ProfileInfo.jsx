import userPhoto from "../../../userPhoto.jpg";
import s from './ProfileInfo.module.css'
import bannerINO from "../../../bannerx.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img src={bannerINO} alt="banner" className={s.banner_content} />
      <div className={s.wrapper}>
        <div className={s.photo}>
          <img src={props.profile.photos.large != null ? userPhoto : userPhoto} alt="vrum-vrum" className={s.img_prof} />
        </div>
        <div className={s.info_prof}>
          <p className={s.item}>{props.profile.fullName}</p>
          <p className={s.status}><ProfileStatusWithHooks {...props}/></p>
          
          <p className={s.item}>
            <b className="keyword">About: </b>{props.profile.aboutMe}
            
          </p>
          <p className={s.item}>
            <b className="keyword">Looking for a job:</b>{" "}
            {props.profile.lookingForAJob}
            {props.profile.lookingForAJobDescription}
          </p>
          <a href=" #!" className={s.item}>
            <b className="keyword">Contacts: </b>
            {props.profile.contacts.website}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
