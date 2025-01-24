import s from "../Music/Music.module.css";
import playicon from "../../play.svg";

function Music() {
  return (
    <div>
      <div className={s.content}>
      <h2 className={s.musicHeader}>My Music</h2>
        <div className={s.item}>
          <button className={s.btn}>
            <img src={playicon} alt="sofa" />
          </button>
          <div className={s.infosong}>
            <p className={s.artist}><a href="#!">2hug</a></p>
            <p className={s.text}>Сны</p>
          </div>
        </div>
        <div className={s.item}>
          <button className={s.btn}>
            <img src={playicon} alt="sofa" />
          </button>
          <div className={s.infosong}>
            <p className={s.artist}><a href="#!">YASMI</a></p>
            <p className={s.text}>Немного таггом</p>
          </div>
        </div>
        <div className={s.item}>
          <button className={s.btn}>
            <img src={playicon} alt="sofa" />
          </button>
          <div className={s.infosong}>
            <p className={s.artist}><a href="#!">YUNGWAY</a></p>
            <p className={s.text}>Мелочи</p>
          </div>
        </div>
        <div className={s.item}>
          <button className={s.btn}>
            <img src={playicon} alt="sofa" />
          </button>
          <div className={s.infosong}>
            <p className={s.artist}><a href="#!">YASMI</a></p>
            <p className={s.text}>На деле</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
