import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
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
      photoUrl:
        "https://m.media-amazon.com/images/M/MV5BZmM3YWZhZDUtZmM2NS00ZDE5LWI4YzEtZDYzYjc0OTRjYTE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      message: "Йе-йе, это ФРЕНДЛИ ТАГ, ПИСЯТДВА НАХУЙ",
      CountLike: 11,
    },
    {
      id: 2,
      photoUrl: "https://pbs.twimg.com/media/E-cR3z8XoAY4ftd.jpg",
      message: "Секс на кухонном столе...",
      CountLike: 22,
    },
    {
      id: 3,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29.jpg/220px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29.jpg",
      message: "Че вы там педики, мы реально на гелике",
      CountLike: 16,
    },
    {
      id: 4,
      photoUrl:
        "https://i.pinimg.com/564x/b4/d1/85/b4d1856339d8e64d6603c4dcefb61e7b.jpg",
      message: "Мои суприм трусы испачканы в сиропе...",
      CountLike: 21,
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        CountLike: 0,
        photoUrl: "https://i.ytimg.com/vi/wYZux3BMc5k/maxresdefault.jpg",
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      };
    }
    default:
      return state;
  }
};

const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
const deletePost = (postId) => ({ type: DELETE_POST, postId });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

const saveProfile = (profile) => async (dispatch, getState) => {
  const userdId = getState().auth.userId
  let response = await profileAPI.saveProfile(profile);
  if (response.data.data.resultCode === 0) {
    dispatch(setUserProfile(userdId)); 
  } else {
          dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
   }
};

export {
  addPostActionCreator,
  setUserProfile,
  getStatus,
  updateStatus,
  deletePost,
  savePhoto,
  saveProfile
};

export default profileReducer;
