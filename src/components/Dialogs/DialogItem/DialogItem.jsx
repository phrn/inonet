import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let pathToProfile = "/profile/" + props.id;
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <div className={s.msgs}>
        <NavLink to={pathToProfile}>
          <img src={props.photoUrl} alt="x" className={s.imgDialog} />
        </NavLink>
        <div className={s.msgDescr + " " + s.active}>
          <NavLink to={path}>
            <p className={s.sent}>{props.name}</p>
            <p className={s.sent}>{props.message}</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
