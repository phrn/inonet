import s from "../MyFeed/MyFeed.module.css";
import zakopane from '../../zakopane.jpg'
import pieniny from '../../pieniny.jpg'
import bieszczady from '../../Bieszczady Mountains.jpg'
import ava from "../../avatar-1.png";
import ava2 from "../../avatar-6.png";
import ava3 from "../../avatar-3.png";

function MyFeed(props) {

  <MyFeed CountLike="Like" />;

  return (
    <div>
      <div className={s.content}>
      <h2 className={s.feed}>Feed</h2>
      <div className={s.sents}>
        <div className={s.imgblock}>
        <img src={ava} alt="" className={s.imgAuthor} />
        </div>
        <div>
        <p className={s.feedAuthor}>Родя Мирный</p>
        <p className={s.feedtext}>опубликовал пост:</p>
        <div className={s.card}>
          <div className={s.text}>The Tatra Mountains</div>
          <img src={zakopane} alt="" className={s.img} />
        </div>
        <button className={s.item_do}>{props.CountLike}</button>
        </div>
      </div>
      <div className={s.sents}>
        <div className={s.imgblock}>
        <img src={ava2} alt="" className={s.imgAuthor} />
        </div>
        <div>
        <p className={s.feedAuthor}>Сэян Вэрюбиновский</p>
        <p className={s.feedtext}>опубликовал пост:</p>
        <div className={s.card}>
          <div className={s.text}>Pieniny</div>
          <img src={pieniny} alt="" className={s.img} />
        </div>
        <button className={s.item_do}>{props.CountLike}</button>
        </div>
      </div>
      <div className={s.sents}>
        <div className={s.imgblock}>
        <img src={ava3} alt="" className={s.imgAuthor} />
        </div>
        <div>
        <p className={s.feedAuthor}>Артем Запорожский</p>
        <p className={s.feedtext}>опубликовал пост:</p>
        <div className={s.card}>
          <div className={s.text}>Bieszczady Mountains</div>
          <img src={bieszczady} alt="" className={s.img} />
        </div>
          <button className={s.item_do}>{props.CountLike}</button>
        </div>
      </div>
      
      
        
      </div>
    </div>
  );
}

export default MyFeed;


