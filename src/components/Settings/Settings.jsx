import s from "../Settings/Settings.module.css";

function Settings() {
  return (
    <div>
      <div className={s.content}>
        <h2 className={s.settings_header}>Settings</h2>
        <div className={s.item}>
        <label className={s.setting_check}>
            <input type="checkbox" />
            Show only my posts on my page by default
          </label>
          </div>
          <div className={s.item}>
          <label className={s.setting_check}>
            <input type="checkbox" />
            Disable wall comments
          </label>
          </div>
          <div className={s.item}>
          <label className={s.setting_check}>
            <input type="checkbox" />
            Show instant notifications
          </label>
          <label className={s.setting_check}></label>
          </div>
      </div>
    </div>
  );
}

export default Settings;
