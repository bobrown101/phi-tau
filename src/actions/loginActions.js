import * as types from './actionTypes';
import { push } from 'react-router-redux';

import axios from 'axios';



export function attempt_login(email, password, forward_location = "/admin-dashboard") {
  return (dispatch, getState) => { // eslint-disable-line
    // return dispatch(fetchPosts(subreddit))
    axios({
      method: 'post',
      url: '/api/v1/login',
      data: {
        email: email,
        password: password
      }
    })
    .then(function (response) {
      console.log("Login reponse");
      console.log(response);
      if(response.data.success){
        dispatch(login_success(response.data.token));
        dispatch(push(forward_location));
      }else{
        dispatch(login_failure(response.data.message, response.data.errorSource));
      }
    })
    .catch(function (error) {
      console.log("axios request error");
      throw error;
    });
  };
}


export function login_success(token){
  return {
    type: types.LOGIN_SUCCESS,
    success: true,
    accessToken: token
  };
}

export function login_failure(error, errorSource){
  return {
    type: types.LOGIN_FAILURE,
    success: false,
    error: error,
    errorSource: errorSource
  };
}
