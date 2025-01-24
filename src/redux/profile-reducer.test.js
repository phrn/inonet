import profileReducer, { deletePost } from "./profile-reducer";

test("after deleting length shouldn't be decrement", () => {
  // 1. Test data
  let action = deletePost(1);
  let state = {
    posts: [
      { id: 1, message: "1 post", likesCount: 5 },
      { id: 2, message: "2 post", likesCount: 3 },
      { id: 3, message: "43 post", likesCount: 1 },
      { id: 4, message: "44 post", likesCount: 2 },
    ],
    
  };

  // 2. Action
  let newState = profileReducer(state, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(3);
});