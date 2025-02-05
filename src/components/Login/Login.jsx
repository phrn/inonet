import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
  minLengthCreator,
} from "../../utils/validators/validators";
import { logout, login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import st from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  // можно вместо полных пропсов, прокинуть только нужные функции\данные, напр ({handleSumbut}, error)
  return (
    <form onSubmit={handleSubmit} className={s.form_wrapper}>
      <div className={s.textLogin}>
        <Field
          type="text"
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required, maxLengthCreator(20), minLengthCreator(4)]}
        />
      </div>
      <div className={s.textLogin}>
        <Field
          type="password"
          placeholder={"password"}
          name={"password"}
          component={Input}
          validate={[required, minLengthCreator(8)]}
        />
      </div>
      <div className={s.checkbox}>
        <Field
          type={"checkbox"}
          className={s.inputCheckbox}
          name={"rememberMe"}
          component={Input}
        />
        <p>remember me</p>
      </div>
      { captchaUrl && <img src={captchaUrl}/>}
      { captchaUrl && createField("Captcha", "captcha", [required], Input, {}) }
      
      {error && <div className={st.formSummaryError}>{error}</div>}
      <div className={s.buttons}>
        <button className={s.loginBtn}>Login</button>
        <button className={s.signUpBtn}>Sign Up</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={s.login_wrapper}>
      <h1 className={s.login}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login, logout })(Login);
