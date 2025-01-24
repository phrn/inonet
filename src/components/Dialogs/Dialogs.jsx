import { Navigate } from "react-router-dom";
import s from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";



function Dialogs(props) {
  let state = props.state.dialogsData;
  let dialogsElement = props.state.dialogsData.map((d) => (
    <DialogItem
      id={d.id}
      key={d.id}
      name={d.name}
      message={d.message}
      photoUrl={d.photoUrl}
    />
  ));
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={s.content}>
      <div>{dialogsElement}</div>
      <div>
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
}

const AddMessageForm = (props) => {
  return (
    <form className={s.form_dialog} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[ required, maxLengthCreator(100), minLengthCreator(10) ]}
        name="newMessageBody"
        placeholder="enter your message"
      />
      <button className={s.btn_dialog}>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
