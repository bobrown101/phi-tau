import React from 'react';
import { connect } from 'react-redux';
import PollForm from '../../components/PollForm';
import {
  attempt_get_users,
  attempt_get_events,
  attempt_add_user,
  attempt_set_user_attendance,
  attempt_submit_attendance,
  attempt_create_poll,
  attempt_notify_users}
  from '../../actions/adminActions.js';



const Event = React.createClass({
  propTypes: function(){
    return {
      get_events: React.PropTypes.function.isRequired
    };
  },
  componentWillMount: function(){
    this.props.get_events();
    // this.props.get_events();
    let that = this;
    setInterval(function() {
      console.log("refreshing data for live-feel");
      that.props.get_events();
    }, 3000);
  },
  componentDidMount: function(){
    this.props.get_users();
  },
  render: function() {


    return (
      <PollForm
        currentEvent={this.props.currentEvent}
        currentPoll={this.props.currentPoll}
        notify_users={this.props.attempt_notify_users}


      />
    );
  }

});

// ===================================

Event.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = function(store, ownProps) {
  let currentEvent = store.admin.events.filter(function(obj){
    return obj._id == ownProps.params.eventID;
  });

  let currentPoll = null;

  if(currentEvent.length != 1){
    currentEvent = null;
  }else{
    currentEvent = currentEvent[0];

    currentPoll = currentEvent.polls.filter(function(obj){
      // console.log("matches? ", obj._id == ownProps.params.pollID);
      return obj._id == ownProps.params.pollID;
    });

    if(currentPoll.length != 1){
      currentPoll = null;

    }else{
      currentPoll = currentPoll[0];
    }
  }

  return {
    currentEvent: currentEvent,
    currentPoll: currentPoll
  };

};

const mapDispatchToProps = function(dispatch, ownProps){

  return {
    get_users: function() {
      dispatch(attempt_get_users());
    },
    get_events: function() {
      dispatch(attempt_get_events());
    },
    add_user: function(name, email, phone_number) {
      dispatch(attempt_add_user(name, email, phone_number));
    },
    submit_attendance: function(eventID, usersPresent, usersAbsent, usersExcused, usersCoop){
      dispatch(attempt_submit_attendance(eventID, usersPresent, usersAbsent, usersExcused, usersCoop));
    },
    set_user_attendance(user, attendance){
      dispatch(attempt_set_user_attendance(ownProps.params.eventID, user, attendance));
    },
    create_poll: function(event, name, options) {
      dispatch(attempt_create_poll(event, name, options));
    },
    attempt_notify_users: function(eventID, pollID) {
      console.log("attempting to notify users with eventID: " + eventID + " and a pollID of: " + pollID);

      dispatch(attempt_notify_users(eventID, pollID));
    }


  };
};
// ====================================


export default connect(mapStateToProps, mapDispatchToProps)(Event);
