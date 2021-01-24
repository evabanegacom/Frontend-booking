const initialState = {
  loggedIn: false,
  user: {},
  error: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        loggedIn: action.payload.loggedIn,
        user: { ...action.payload.user },
        error: action.payload.error,
      };

      // case 'WRONG_USER':
      //   return {
      //     loggedIn: false,
      //     user: {},
      //     error: 'invalid',
      //   };

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
