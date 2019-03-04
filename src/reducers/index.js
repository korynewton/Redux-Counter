import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    console.log('inside increment reducer')
    // Fill in the body of this case
    return {
      ...state,
      count : action.payload
    }
    case DECREMENT:
    // Fill in the body of this case
    return {
      ...state,
      count : action.payload
    }
    default:
      return state;
  }
};

