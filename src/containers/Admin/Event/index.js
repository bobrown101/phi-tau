import React from 'react';
import { connect } from 'react-redux';
import EventForm from '../../../components/EventForm';
import {
  attempt_get_users,
  attempt_get_events,
  attempt_add_user,
  attempt_set_user_attendance,
  attempt_submit_attendance,
  attempt_create_poll}
  from '../../../actions/adminActions.js';



const Event = React.createClass({
  componentDidMount: function(){
    this.props.get_users();
    // this.props.get_events();
  },
  componentWillMount: function(){
    this.props.get_events();
  },
  // create_poll: function(eventID){
  //   let options = this.state.newPollOptions.split(',');
  //   this.props.create_poll(eventID, this.state.newPollName, options); // TODO - add options. Maybe comma separated?
  // },
  render: function() {
    return (
      <EventForm
        get_users={this.props.get_users}
        userList={this.props.userList}
        add_user={this.props.add_user}
        eventID={this.props.params.eventID}
        events={this.props.events}
        set_user_attendance={this.props.set_user_attendance}
        submit_attendance={this.props.submit_attendance}
        currentEvent={this.props.currentEvent}
        create_poll={this.props.create_poll}

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

  if(currentEvent.length != 1){
    currentEvent = null;
  }else{
    currentEvent = currentEvent[0];
  }

  return {
    userList: store.admin.users,
    events: store.admin.events,
    currentEvent: currentEvent
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
    }


  };
};
// ====================================


export default connect(mapStateToProps, mapDispatchToProps)(Event);
