import * as types from './actionTypes';
import { push } from 'react-router-redux';

import axios from 'axios';

export function attempt_get_users() {
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    console.log("attempting to get users");
    axios({
      method: 'post',
      url: '/api/v1/getUsers',
      headers: {
        'x-access-token': getState().authentication.token
      }
    })
    .then(function (response) {
      console.log("get_users reponse");
      console.log(response);
      if(response.data.success){
        dispatch(get_users_success(response.data.users));
      }else{
        dispatch(get_users_failure(response.data.message));
      }
    })
    .catch(function (error) {
      console.log("error get_users: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function get_users_success(users){
  return {
    type: types.GET_USERS_SUCCESS,
    success: true,
    users: users
  };
}

export function get_users_failure(error){
  return {
    type: types.GET_USERS_FAILURE,
    success: false,
    error: error
  };
}

export function attempt_add_user(name, email, phone_number){
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    console.log("attempting to add (aka create) user");
    axios({
      method: 'post',
      url: '/api/v1/addUser',
      headers: {
        'x-access-token': getState().authentication.token
      },
      data: {
        name: name,
        email: email,
        phone_number: phone_number
      }
    })
    .then(function (response) {
      console.log("add_user reponse");
      console.log(response);
      if(response.data.success){
        dispatch(add_user_success(response.data.users));
        dispatch(attempt_get_users());
      }else{
        dispatch(add_user_failure(response.data.message));
      }
    })
    .catch(function (error) {
      console.log("error get_users: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function add_user_success(){
  return {
    type: types.ADD_USER_SUCCESS,
    success: true
  };
}

export function add_user_failure(message){
  return {
    type: types.ADD_USER_FAILURE,
    success: false,
    message: message
  };
}

export function attempt_get_events(){
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    axios({
      method: 'post',
      url: '/api/v1/getEvents',
      headers: {
        'x-access-token': getState().authentication.token
      }
    })
    .then(function (response) {
      if(response.data.success){
        dispatch(get_events_success(response.data.events));
        // dispatch(add_user_success(response.data.users));
        // dispatch(attempt_get_users());
      }else{
        dispatch(get_events_failure(response.data.message));

        // dispatch(add_user_failure(response.data.message));
      }
    })
    .catch(function (error) {
      console.log("error create_event: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function get_events_success(events){
  return {
    type: types.GET_EVENTS_SUCCESS,
    success: true,
    events: events
  };
}

export function get_events_failure(error){
  return {
    type: types.GET_EVENTS_FAILURE,
    success: false,
    error: error
  };
}

export function attempt_create_event(event_name){
  // console.log("event name: " + event_name);
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    axios({
      method: 'post',
      url: '/api/v1/createEvent',
      headers: {
        'x-access-token': getState().authentication.token
      },
      data: {
        event_name: event_name
      }
    })
    .then(function (response) {
      if(response.data.success){
        // console.log('TODO - create event success');

        dispatch(create_event_success(response.data.events));
        dispatch(attempt_get_events());
      }else{
        // console.log('TODO - create event failure');
        dispatch(create_event_failure(response.data.message));

      }
    })
    .catch(function (error) {
      console.log("error create_event: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function create_event_success(event){
  return {
    type: types.CREATE_EVENT_SUCCESS,
    success: true,
    events: event
  };
}

export function create_event_failure(error){
  return {
    type: types.CREATE_EVENT_FAILURE,
    success: false,
    error: error
  };
}

export function attempt_submit_attendance(eventID, usersPresent, usersAbsent, usersExcused, usersCoop){
  // console.log("event name: " + event_name);
  console.log(eventID);
  console.log(usersPresent);
  console.log(usersAbsent);
  console.log(usersExcused);
  console.log(usersCoop);
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    axios({
      method: 'post',
      url: '/api/v1/submitAttendance',
      headers: {
        'x-access-token': getState().authentication.token
      },
      data: {
        eventID: eventID,
        usersPresent: usersPresent,
        usersAbsent: usersAbsent,
        usersExcused: usersExcused,
        usersCoop: usersCoop
      }
    })
    .then(function (response) {
      if(response.data.success){

        dispatch(submit_attendance_success());
      }else{
        dispatch(submit_attendance_failure(response.data.message));

      }
    })
    .catch(function (error) {
      console.log("error submit_attendance: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function submit_attendance_success(){
  return {
    type: types.SUBMIT_ATTENDANCE_SUCCESS,
    success: true
  };
}

export function submit_attendance_failure(error){
  return {
    type: types.SUBMIT_ATTENDANCE_FAILURE,
    success: false,
    error: error
  };
}

export function attempt_set_user_attendance(eventID, user, attendance){
  // console.log("event name: " + event_name);
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    axios({
      method: 'post',
      url: '/api/v1/setUserAttendance',
      timeout: 3000,
      headers: {
        'x-access-token': getState().authentication.token
      },
      data: {
        eventID,
        user,
        attendance
      }
    })
    .then(function (response) {
      if(response.data.success){
        dispatch(set_user_attendance_success());
        dispatch(attempt_get_events());
      }else{
        dispatch(set_user_attendance_failure(response.data.message));

      }
    })
    .catch(function (error) {
      console.log("error set_user_attendance: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function set_user_attendance_success(){
  return {
    type: types.SET_USER_ATTENDANCE_SUCCESS,
    success: true
  };
}

export function set_user_attendance_failure(error){
  return {
    type: types.SET_USER_ATTENDANCE_FAILURE,
    success: false,
    error: error
  };
}


export function attempt_create_poll(eventID, pollName, options){
  // console.log("event name: " + event_name);
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    console.log("attempting to create event");
    axios({
      method: 'post',
      url: '/api/v1/createPoll',
      headers: {
        'x-access-token': getState().authentication.token
      },
      data: {
        eventID: eventID,
        pollName: pollName,
        options: JSON.stringify(options)
      }
    })
    .then(function (response) {
      console.log("attempt_create_poll reponse");
      console.log(response);
      if(response.data.success){
        // console.log('TODO - create event success');

        dispatch(create_poll_success(response.data.events));
        dispatch(attempt_get_events());
      }else{
        // console.log('TODO - create event failure');
        dispatch(create_poll_failure(response.data.message));

      }
    })
    .catch(function (error) {
      console.log("error create_poll: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function create_poll_success(poll){
  return {
    type: types.CREATE_POLL_SUCCESS,
    success: true,
    poll: poll
  };
}

export function create_poll_failure(error){
  return {
    type: types.CREATE_POLL_FAILURE,
    success: false,
    error: error
  };
}

//TODO - notify users


export function attempt_notify_users(eventID, pollID){
  // console.log("event name: " + event_name);
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    axios({
      method: 'post',
      url: '/api/v1/notifyUsers',
      headers: {
        'x-access-token': getState().authentication.token
      },
      data: {
        eventID: eventID,
        pollID: pollID
      }
    })
    .then(function (response) {
      console.log("attempt_notify_users reponse");
      console.log(response);
      if(response.data.success){

        dispatch(notify_users_success(response.data.events));
      }else{
        dispatch(notify_users_failure(response.data.message));

      }
    })
    .catch(function (error) {
      console.log("error notify_users: ");
      console.log(error);
      // dispatch(login_failure(error));
    });
  };
}

export function notify_users_success(poll){
  return {
    type: types.NOTIFY_USERS_SUCCESS,
    success: true,
    poll: poll
  };
}

export function notify_users_failure(error){
  return {
    type: types.NOTIFY_USERS_FAILURE,
    success: false,
    error: error
  };
}
