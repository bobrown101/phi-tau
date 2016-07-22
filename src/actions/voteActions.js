import * as types from './actionTypes';
// import { push } from 'react-router-redux';
// import sweetalert from '../sweetalert/sweetalert.es6.js';

import axios from 'axios';


export function attempt_get_poll(pollID){
  // console.log("event name: " + event_name);
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    axios({
      method: 'post',
      url: '/api/v1/getPoll',
      headers: {
        'x-access-token': getState().authentication.token
      },
      data: {
        pollID: pollID
      }
    })
    .then(function (response) {
      console.log("attempt_get_poll reponse");
      console.log(response);
      if(response.data.success){
        dispatch(get_poll_success(response.data.poll));
      }else{
        dispatch(get_poll_failure(response.data.message));
      }
    })
    .catch(function (error) {
      console.log("error get_poll: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function get_poll_success(poll){
  console.log("get poll success");
  console.log(poll);
  return {
    type: types.GET_POLL_SUCCESS,
    success: true,
    poll: poll
  };
}

export function get_poll_failure(error){
  return {
    type: types.GET_POLL_FAILURE,
    success: false,
    error: error
  };
}



export function attempt_cast_vote(eventID,pollID,userID,voteID){
  // console.log("event name: " + event_name);
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    axios({
      method: 'post',
      url: '/api/v1/voteOnPoll',
      headers: {
        'x-access-token': getState().authentication.token
      },
      data: {
        eventID: eventID,
        pollID: pollID,
        userID: userID,
        voteID: voteID
      }
    })
    .then(function (response) {
      console.log("attempt_cast_vote reponse");
      console.log(response);
      if(response.data.success){
        dispatch(cast_vote_success(response.data.events));
      }else{
        dispatch(cast_vote_failure(response.data.message));
      }
    })
    .catch(function (error) {
      console.log("error cast_vote: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function cast_vote_success(poll){
  return {
    type: types.CAST_VOTE_SUCCESS,
    success: true,
    poll: poll
  };
}

export function cast_vote_failure(message){
  return {
    type: types.CAST_VOTE_FAILURE,
    success: false,
    message: message
  };
}

export function clear_status(){
  return {
    type: types.CLEAR_STATUS
  };
}
