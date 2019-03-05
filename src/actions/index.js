export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (count) => {
  // Fill in this function
  // console.log('in the incementor' , count)
  return {
    type: INCREMENT,
    payload: count + 1
  }
};

export const decrement = (count) => {
  // console.log('in the decrementor')
  // Fill in this function
  return {
    type: DECREMENT,
    payload: count - 1
  }
};
