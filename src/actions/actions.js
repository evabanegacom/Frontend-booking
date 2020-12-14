const setUser = payload => ({ type: 'SET_USER', payload });

const startBooking = payload => ({ type: 'SET_BOOKING', payload });

const getUserBooking = payload => ({ type: 'SET_BOOKING_DETAIL', payload });

export const FETCH_CARS_BEGIN = 'FETCH_CARS_BEGIN';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';

export const FETCH_CAR_DETAILS_BEGIN = 'FETCH_CARS_DETAILS_BEGIN';
export const FETCH_CAR_DETAILS_SUCCESS = 'FETCH_CARS_DETAILS_SUCCESS';
export const FETCH_CAR_DETAILS_FAILURE = 'FETCH_CARS_DETAILS_FAILURE';

export const FETCH_BOOKING_SUCCESS = 'FETCH_BOOKING_SUCCESS';

export const FETCH_USER_BOOKING_DETAIL = 'FETCH_USER_BOOKING_DETAIL';

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

// car setails

export const fetchCarDetailsBegin = () => ({
  type: FETCH_CAR_DETAILS_BEGIN,
});

export const fetchCarDetailsSuccess = data => ({
  type: FETCH_CAR_DETAILS_SUCCESS,
  payload: data,
});

export const fetchCarDetailsFailure = error => ({
  type: FETCH_CAR_DETAILS_FAILURE,
  payload: error,
});

export const logUserOut = () => ({ type: 'LOG_OUT' });

// Booking REGISTRATION

export const fetchUser = userInfo => dispatch => {
  fetch('https://gothic-serpent.herokuapp.com/api/v1/login', {
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
  fetch('https://gothic-serpent.herokuapp.com/api/v1/users', {
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
  fetch('https://gothic-serpent.herokuapp.com/api/v1/auto_login', {
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
  fetch('https://gothic-serpent.herokuapp.com/api/v1/cars', {
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

export const getCarDetails = id => dispatch => {
  dispatch(fetchCarsBegin());
  fetch(`https://gothic-serpent.herokuapp.com/api/v1/cars/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchCarDetailsSuccess(data));
    });
};

export const userBooking = userInfo => dispatch => {
  fetch('https://gothic-serpent.herokuapp.com/api/v1/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(userInfo),
  })
    .then(res => res.json())
    .then(data => {
      dispatch(startBooking(data));
    });
};

export const userBookingDetail = () => dispatch => {
  fetch('https://gothic-serpent.herokuapp.com/api/v1/bookings', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      dispatch(getUserBooking(data));
    });
};
