import s from "../Sidebar/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import bb from "./../../../bb.webp";

function Sidebar(props) {
  

  let pathToProfile = "/profile/"
  

  return (
    <div>
      <h2 className={s.headerFriends}>Friends</h2>
      <div className={s.wrapper}>
        <div className={s.item}>
          <NavLink
            to={pathToProfile}
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <div className={s.friendsOnline}>
              <img src={bb} alt="" className={s.img} />
              <p className={s.friendsName}>Артём</p>
            </div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={pathToProfile}
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <div className={s.friendsOnline}>
              <img src={bb} alt="" className={s.img} />
              <p className={s.friendsName}>Сэян</p>
            </div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={pathToProfile}
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            <div className={s.friendsOnline}>
              <img src={bb} alt="" className={s.img} />
              <p className={s.friendsName}>Христиано</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
