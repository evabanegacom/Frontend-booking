import carDetailsReducer from '../reducers/carDetailsReducer';

describe('carDetail reducer', () => {
  it('should return the initial state', () => {
    expect(carDetailsReducer(undefined, {})).toEqual({
      car: [],
      waiting: 'wait for it',
      error: null,
    });
  });

  it('should handle FETCH_CARS_DETAILS_BEGIN', () => {
    expect(
      carDetailsReducer([], {
        type: 'FETCH_CARS_DETAILS_BEGIN',
      }),
    ).toEqual(
      {
        waiting: 'wait for it',
      },
    );
  });

  it('should handle FETCH_CARS_DETAILS_SUCCESS', () => {
    expect(
      carDetailsReducer([], {
        type: 'FETCH_CARS_DETAILS_SUCCESS',
      }),
    ).toEqual(
      {
        waiting: 'here we are',
      },
    );
  });
});