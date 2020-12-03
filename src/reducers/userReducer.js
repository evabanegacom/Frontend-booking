const initialState = {
  loggedIn: false,
  user: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        loggedIn: action.payload.loggedIn,
        user: { ...action.payload.user },
      };

    case 'LOG_OUT':
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
