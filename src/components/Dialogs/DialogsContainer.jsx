import { compose } from "redux";
import {
  sendMessageCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage.dialogsData,
    newMessageBody: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => dispatch(sendMessageCreator(newMessageBody)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs);
