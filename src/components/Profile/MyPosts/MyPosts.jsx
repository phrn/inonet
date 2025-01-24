import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";

function MyPosts(props) {

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  let postsElement = 
  [...props.posts].reverse().map((p) => (
    <Post
      message={p.message}
      key={p.id}
      CountLike={p.CountLike}
      photoUrl={p.photoUrl}
    />
  ));

  return (
    <div>
      <h3 className={s.postheader}>My posts</h3>
      <div className={s.content}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        validate={[required, maxLengthCreator(60), minLengthCreator(10)]}
        component={Textarea}
        className={s.textarea}
        placeholder="write smth"
        name="newPostText"
      />
      <button className={s.btn}>Add Post</button>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
