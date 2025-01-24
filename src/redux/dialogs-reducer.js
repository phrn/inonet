const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsData: [
    {
      id: 1,
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BZmM3YWZhZDUtZmM2NS00ZDE5LWI4YzEtZDYzYjc0OTRjYTE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      name: "Леон Мессев",
      message: "роналду второй",
    },
    {
      id: 2,
      photoUrl: "https://pbs.twimg.com/media/E-cR3z8XoAY4ftd.jpg",
      name: "Христиано Роналденко",
      message: "месси лох",
    },
    {
      id: 3,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29.jpg/220px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29.jpg",
      name: "Сэян Вэрюбиновский",
      message: "продал битов на миллион",
    },
    {
      id: 4,
      photoUrl:
        "https://www.president.gov.ua/storage/j-image-storage/18/47/25/d3565382ee2c1841b9d7a2684c5fa261_1617378952_large.png",
      name: "Артём Запорожский",
      message: "6АМ В Будапеште",
    },
    {
      id: 5,
      photoUrl:
        "https://i.pinimg.com/564x/b4/d1/85/b4d1856339d8e64d6603c4dcefb61e7b.jpg",
      name: "Оуджи Глупый",
      message: "Меня теперь зовут так",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let stateCopy;
      let body = action.newMessageBody;
      stateCopy = {
        ...state,
        newMessageBody: "",
      };
      stateCopy.dialogsData.push({
        id: 6,
        photoUrl: "https://i.ytimg.com/vi/wYZux3BMc5k/maxresdefault.jpg",
        name: "test", 
        message: body, 
      });

      return stateCopy;

    default:
      return state;
  }
};

const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});



export { sendMessageCreator };
export default dialogsReducer;
