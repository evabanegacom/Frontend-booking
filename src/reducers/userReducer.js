const initialState = {
  loggedIn: false,
  user: {},
};
/* eslint-disable */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      const anyName = {
        loggedIn: action.payload.loggedIn,
        user: { ...action.payload.user },
      };
      console.log(anyName);
      return anyName;

    case "LOG_OUT":
      localStorage.clear();
      console.log('hello');
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
/* eslint-enable */
