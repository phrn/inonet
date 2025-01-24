
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 55,
  totalUsersCount: 1000,
  currentPage: 1,
  totalCount: 26994,
  isFetching: true,
  followingInProgress: [2],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
        // users: [...state.users] same to under string but w/o using func. map
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
      };
    case UNFOLLOW:
      return {
        ...state, 
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
        // users: [...state.users] same to under string but w/o using func. map
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
  };
};

const followUnfollowFlow = async (
  
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  toggleFollowingProgress(true, userId);
  let response = await apiMethod(userId);
  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};
export const follow = (userId) => {
  return async (dispatch) => {
    // let apiMethod = usersAPI.follow.bind(usersAPI)
    // let actionCreator = followSuccess

    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    // let apiMethod = usersAPI.unfollow.bind(usersAPI)
    // let actionCreator = unfollowSuccess
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

export { FOLLOW, UNFOLLOW };

export default usersReducer;
// import { usersAPI } from "../api/api";

// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
// const SET_USERS = "SET_USERS";
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
// const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
// const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
// const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

// let initialState = {
//   users: [],
//   pageSize: 55,
//   totalUsersCount: 1000,
//   currentPage: 1,
//   totalCount: 26994,
//   isFetching: true,
//   followingInProgress: [2],
// };

// const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FOLLOW:
//       return {
//         ...state,
//         // users: [...state.users] same to under string but w/o using func. map
//         users: state.users.map((u) => {
//           if (u.id === action.userId) {
//             return { ...u, followed: true };
//           }
//           return u;
//         }),
//       };
//     case UNFOLLOW:
//       return {
//         ...state,
//         // users: [...state.users] same to under string but w/o using func. map
//         users: state.users.map((u) => {
//           if (u.id === action.userId) {
//             return { ...u, followed: false };
//           }
//           return u;
//         }),
//       };
//     case SET_USERS: {
//       return { ...state, users: action.users };
//     }
//     case SET_CURRENT_PAGE: {
//       return { ...state, currentPage: action.currentPage };
//     }
//     case SET_TOTAL_USERS_COUNT: {
//       return { ...state, totalUsersCount: action.count };
//     }
//     case TOGGLE_IS_FETCHING: {
//       return { ...state, isFetching: action.isFetching };
//     }
//     case TOGGLE_IS_FOLLOWING_PROGRESS: {
//       return {
//         ...state,
//         followingInProgress: action.isFetching
//           ? [...state.followingInProgress, action.userId]
//           : state.followingInProgress.filter((id) => id != action.userId),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const followSuccess = (userId) => ({ type: FOLLOW, userId });
// export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
// export const setUsers = (users) => ({ type: SET_USERS, users });
// export const setCurrentPage = (currentPage) => ({
//   type: SET_CURRENT_PAGE,
//   currentPage,
// });
// export const setUsersTotalCount = (totalUsersCount) => ({
//   type: SET_TOTAL_USERS_COUNT,
//   count: totalUsersCount,
// });
// export const toggleIsFetching = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching,
// });
// export const toggleFollowingProgress = (isFetching, userId) => ({
//   type: TOGGLE_IS_FOLLOWING_PROGRESS,
//   isFetching,
//   userId,
// });

// export const getUsers = (page, pageSize) => {
//   return async (dispatch) => {
//     dispatch(toggleIsFetching(true));
//     dispatch(setCurrentPage(page));
//     let data = await usersAPI.getUsers(page, pageSize);
//     dispatch(setUsers(data.items));
//     dispatch(toggleIsFetching(false));
//   };
// };



// export const follow = (userId) => {
//   return async (dispatch) => {
//     dispatch(toggleIsFetching(true));
//     toggleFollowingProgress(true, userId);
//     let response = await usersAPI.follow(userId);
//     if (response.data.resultCode == 0) {
//       dispatch(followSuccess(userId));
//     }
//     toggleFollowingProgress(false, userId);
//   };
// };

// export const unfollow = (userId) => {
//   return async (dispatch) => {
//     dispatch(toggleIsFetching(true));
//     toggleFollowingProgress(true, userId);
//     let response = await usersAPI.unfollow(userId)
//       if (response.data.resultCode == 0) {
//         dispatch(unfollowSuccess(userId));
//       }
//       toggleFollowingProgress(false, userId);
//     ;
//   };
// };

// export { FOLLOW, UNFOLLOW };

// export default usersReducer;