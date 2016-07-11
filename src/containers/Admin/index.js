import React from 'react';
import { connect } from 'react-redux';
import AdminForm from '../../components/AdminForm';
import {
  attempt_get_users,
  attempt_get_events,
  attempt_add_user,
  attempt_create_event,
  attempt_create_poll,
  attempt_notify_users}
  from '../../actions/adminActions.js';



const AdminDashboard = React.createClass({
  componentDidMount: function(){
    this.props.get_users();
    this.props.get_events();
  },
  render: function() {
    return (
      <AdminForm
        get_users={this.props.get_users}
        userList={this.props.userList}
        add_user={this.props.add_user}
        get_events={this.props.get_events}
        eventsList={this.props.eventsList}
        create_event={this.props.create_event}
        create_poll={this.props.create_poll}
        attempt_notify_users={this.props.attempt_notify_users}

      />
    );
  }

});

// ===================================

AdminDashboard.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = function(store) {
  return {
    userList: store.admin.users,
    eventsList: store.admin.events
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {

  return {
    get_users: function() {
      dispatch(attempt_get_users());
    },
    add_user: function(name, email, phone_number) {
      console.log("add_user from AdminDashboard");
      dispatch(attempt_add_user(name, email, phone_number));
    },
    get_events: function() {
      dispatch(attempt_get_events());
    },
    create_event: function(name) {
      dispatch(attempt_create_event(name));
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




export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);

// export default AdminDashboard;
