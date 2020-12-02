// Action Creators
/* eslint-disable */
const setUser = payload => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

// Methods

export const fetchUser = (userInfo) => dispatch => {
  fetch('http://localhost:3001/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      // data sent back will in the format of
      // {
      //     user: {},
      // .    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem('token', data.token);
      dispatch(setUser(data));
    });
};

export const signUserUp = userInfo => dispatch => {
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      // data sent back will in the format of
      // {
      //     user: {},
      // .    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem('token', data.token);
      dispatch(setUser(data));
    });
};

export const autoLogin = () => dispatch => {
  fetch('http://localhost:3001/api/v1/auto_login', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // data sent back will in the format of
      // {
      //     user: {},
      // .    token: "aaaaa.bbbbb.bbbbb"
      // }
      dispatch(setUser(data));
    });
};
/* eslint-enable */
