import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar"

// let c1 = "item";
// let c2 = "active";
// // "item active"
// let classes = c1 + "" + c2;
// let classesNew = `${s.item} ${s.active}`
// className={`${s.item} ${s.active}`}

function Navbar(props) {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>
          My Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/myFeed" className = { navData => navData.isActive ? s.active : s.item }>
          My Feed
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>
          My Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>
          Settings
        </NavLink>
      </div>
      <div className={s.search}>
        <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>
          Find users
        </NavLink>
      </div>
      <Sidebar state={props} />
    </nav>
  );
}

export default Navbar;
