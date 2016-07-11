import initialState from './initialState';
// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function testReducer(state = initialState.presentation, action) { // eslint-disable-line no-unused-vars
  // let newState;
  //
  // switch (action.type) {
  //   case "LOGIN":
  //     // For this example, just simulating a save by changing date modified.
  //     // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
  //     // return objectAssign({}, state, {dateModified: dateHelper.getFormattedDateTime(new Date())});
  //     console.log(action.username);
  //     console.log(action.password);
  //
  //     if(action.success){
  //       console.log("success: " + action.accessToken);
  //     }
  //
  //     // if(getState().routing.locationBeforeTransitions.state &&
  //     //   getState().routing.locationBeforeTransitions.state.nextPathname){
  //     //
  //     //   const nextPathname = getState().routing.locationBeforeTransitions.state.nextPathname;
  //     //   dispatch(push(nextPathname));
  //     //
  //     // }else{
  //     //   dispatch(push('/admin-dashboard'));
  //     //
  //     // }
  //
  //
  //     return Object.assign({}, state, {});
  //
  //
  //
  //   case "LOGIN_SUCCESS":
  //     // if(action.success){
  //     //   console.log("success: " + action.accessToken);
  //     // }
  //     // console.log("storing accessToken");
  //     sessionStorage.setItem('accessToken', action.accessToken);
  //
  //
  //     return Object.assign({}, state, {
  //       accessToken: action.accessToken
  //     });
  //
  //   case "LOGIN_FAILURE":
  //     return Object.assign({}, state, {
  //       login_failure: true
  //     });
  //
  //
  //   default:
      return state;
  // }
  //   case CALCULATE_FUEL_SAVINGS:
  //     newState = objectAssign({}, state);
  //     newState[action.fieldName] = action.value;
  //     newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
  //     newState.dateModified = dateHelper.getFormattedDateTime(new Date());
  //
  //     if (newState.necessaryDataIsProvidedToCalculateSavings) {
  //       newState.savings = calculator().calculateSavings(newState);
  //     }
  //
  //     return newState;
  //
  //   default:
  //     return state;
  // }
  //

}