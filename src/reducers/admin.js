import initialState from './initialState';
// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function adminReducer(state = initialState.admin, action) { // eslint-disable-line no-unused-vars

  switch (action.type) {
    case "GET_USERS_SUCCESS":
      return Object.assign({}, state, {
        users: action.users,
        failed_attempt: false
      });

    case "GET_USERS_FAILURE":
      return Object.assign({}, state, {
        failed_attempt: true,
        message: action.error
      });

    case "ADD_USER_FAILURE":
      return Object.assign({}, state, {
        failed_attempt: true,
        message: action.error
      });

    case "GET_EVENTS_SUCCESS":
      return Object.assign({}, state, {
        events: action.events,
        failed_attempt: false
      });

    case "CREATE_EVENT_SUCCESS":
      return Object.assign({}, state, {
        event: action.event,
        failed_attempt: false
      });
    case "CREATE_EVENT_FAILURE":
      return Object.assign({}, state, {
        failed_attempt: false,
        message: action.error
      });
    case "CREATE_POLL_SUCCESS":
      return Object.assign({}, state, {
        event: action.event,
        failed_attempt: false
      });
    case "CREATE_POLL_FAILURE":
      return Object.assign({}, state, {
        failed_attempt: false,
        message: action.error
      });

    // case "LOGIN":
    //   // For this example, just simulating a save by changing date modified.
    //   // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
    //   // return objectAssign({}, state, {dateModified: dateHelper.getFormattedDateTime(new Date())});
    //   console.log(action.username);
    //   console.log(action.password);
    //   console.log("TODO");
    //
    //   if(action.success){
    //     console.log("success: " + action.accessToken);
    //   }
    //
    //
    //
    //   // if(getState().routing.locationBeforeTransitions.state &&
    //   //   getState().routing.locationBeforeTransitions.state.nextPathname){
    //   //
    //   //   const nextPathname = getState().routing.locationBeforeTransitions.state.nextPathname;
    //   //   dispatch(push(nextPathname));
    //   //
    //   // }else{
    //   //   dispatch(push('/admin-dashboard'));
    //   //
    //   // }
    //
    //
    //   return Object.assign({}, state, {});
    //
    //
    //
    // case "LOGIN_SUCCESS":
    //   return Object.assign({}, state, {
    //     authenticated: true,
    //     token: action.accessToken,
    //     failed_attempt: false
    //   });
    //
    // case "LOGIN_FAILURE":
    //   return Object.assign({}, state, {
    //     failed_attempt: true,
    //     message: action.error
    //   });


    default:
      return state;
  }


}
