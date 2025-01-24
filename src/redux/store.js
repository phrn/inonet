import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";



let store = {
  _state: {
    profilePage: {
      profileData: [
        {
          id: 1,
          name: "Леон Мессев",
          dr: "24 Feb",
          city: "Кривой Рог",
          website: "messiKPYTOU.ar",
        },
        {
          id: 2,
          name: "Христиано Роналденко",
          dr: "24 Mar",
          city: "Гомель",
          website: "RONALDOverygood.pr",
        },
        {
          id: 3,
          name: "Сэян Вэрюбиновский",
          dr: "24 Apr",
          city: "Саянск",
          website: "Herpu_lludopacu.ru",
        },
        {
          id: 4,
          name: "Артем Запорожский",
          dr: "24 May",
          city: "Запорижье",
          website: "fukcfeim.ua",
        },
      ],
      posts: [
        {
          id: 1,
          message: "Йе-йе, это ФРЕНДЛИ ТАГ, ПИСЯТДВА НАХУЙ",
          CountLike: 11,
        },
        { id: 2, message: "Секс на кухонном столе...", CountLike: 22 },
        {
          id: 3,
          message: "Че вы там педики, мы реально на гелике",
          CountLike: 16,
        },
        {
          id: 4,
          message: "Мои суприм трусы испачканы в сиропе...",
          CountLike: 21,
        },
      ],
      newPostText: "fxckfxme",
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Леон Мессев", message: "роналду второй" },
        { id: 2, name: "Христиано Роналденко", message: "месси лох" },
        {
          id: 3,
          name: "Сэян Вэрюбиновский",
          message: "продал битов на миллион",
        },
        { id: 4, name: "Артём Запорожский", message: "6АМ В Будапеште" },
        { id: 5, name: "Гриша Глупый", message: "Бегу от охраны" },
      ],
      newMessageBody: "",
    },

    _callSubscriber() {
      console.log("state was changed");
    },
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer - наблюдатель, publisher-subscriber  паттерн
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.users = usersReducer(this._state.users, action);

    this._callSubscriber(this._state);
  },
};




export default store;
