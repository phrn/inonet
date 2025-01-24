import s from "./Post.module.css";
// import postimg from "../../../../postimg.jpg";



function Post(props) {
  // <Posts CountLike="Like" />;
  return (
    <div className={s.content}>
      <div className={s.item}>
        {props.id}
        <div>
          <img src={props.photoUrl} alt="xxx" />
        </div>
        <div className={s.counter}>
          <p className={s.item_text}>{props.message}</p>
          <button className={s.item_do}>{props.CountLike}</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
