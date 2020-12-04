const setUser = payload => ({ type: 'SET_USER', payload });

export const FETCH_CARS_BEGIN = 'FETCH_CARS_BEGIN';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';

export const fetchCarsBegin = () => ({
  type: FETCH_CARS_BEGIN,
});

export const fetchCarsSuccess = data => ({
  type: FETCH_CARS_SUCCESS,
  payload: data,
});

export const fetchCarsFailure = error => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const fetchUser = userInfo => dispatch => {
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
      dispatch(setUser(data));
    });
};

export const getCars = () => dispatch => {
  dispatch(fetchCarsBegin());
  fetch('http://localhost:3001/api/v1/cars', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchCarsSuccess(data));
    });
};
