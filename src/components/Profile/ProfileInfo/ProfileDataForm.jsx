import s from "./ProfileInfo.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import { Contact } from "./ProfileInfo";
import st from "./../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, initialValues, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button className={s.buttonX2} onClick={() => {}}>Save</button>

      <div className={s.info_prof}>
        <div className={s.item}>
          <b>Full Name </b>: {createField("Full Name", "fullName", [], Input)}
        </div>
        { error && <div className={st.formSummaryError}>{error}</div>}

        <p className={s.item}>
          <b>About me: </b>
          {createField("About Me", "aboutMe", [], Input)}
        </p>

        <div className={s.item}>
          <b>Looking for a job: </b>
          {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}

          <div className={s.item}>
            <b>My skills: </b>
          </div>
          {createField("My skills", "lookingForAJobDescription", [], Textarea)}
        </div>


        <div>
          <b>Contacts:</b> {Object.keys(profile.contacts).map((key) =>  {
            return <div key={key} className={s.contact}>
              <b>{key}: {createField(key + ".com", "contacts." + key, [], Input)}</b>
            </div>
          })}
        </div>
        
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
  destroyOnUnmount: false,
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
