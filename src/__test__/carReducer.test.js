import carReducer from '../reducers/carReducer';

describe('cars reducer', () => {
  it('should return the initial state', () => {
    expect(carReducer(undefined, {})).toEqual({
      cars: [],
      waiting: 'wait for it',
      error: null,
    });
  });

  it('should handle FETCH_CARS_BEGIN', () => {
    expect(
      carReducer([], {
        type: 'FETCH_CARS_BEGIN',
      }),
    ).toEqual(
      {
        waiting: 'wait for it',
      },
    );
  });

  it('should handle FETCH_CARS_SUCCESS', () => {
    expect(
      carReducer([], {
        type: 'FETCH_CARS_SUCCESS',
      }),
    ).toEqual(
      {
        waiting: 'here we are',
      },
    );
  });
});
