import initialState from './initialState';
// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function voteReducer(state = initialState.vote, action) { // eslint-disable-line no-unused-vars

  switch (action.type) {
    case "GET_POLL_SUCCESS":
      return Object.assign({}, state, {
        poll: action.poll,
        failed_attempt: false
      });

    case "GET_POLL_FAILURE":
      return Object.assign({}, state, {
        failed_attempt: true,
        message: action.error
      });


    default:
      return state;
  }


}
