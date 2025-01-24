import logo from "../../logo.svg";
import s from "../Header/Header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  console.log(props);
  
  return (
    <header className={s.header}>
      <a href="#!">
        <img alt="logo" src={logo} className={s.logo} />
      </a>

      <div className={s.loginBlock}>
        {props.isAuth ?
         <div>{props.login} <button onClick={props.logout}>Log Out</button></div> : 
        <NavLink to="/profile" />}

        
      </div>
    </header>
  );
}

export default Header;
