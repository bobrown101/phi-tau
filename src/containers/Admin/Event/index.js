import React from 'react';
import { connect } from 'react-redux';
import EventForm from '../../../components/EventForm';
import {
  attempt_get_users,
  attempt_add_user}
  from '../../../actions/adminActions.js';



const Event = React.createClass({
  componentDidMount: function(){
    this.props.get_users();
  },
  render: function() {
    return (
      <EventForm
        get_users={this.props.get_users}
        userList={this.props.userList}
        add_user={this.props.add_user}
        eventID={this.props.params.eventID}
      />
    );
  }

});

// ===================================

Event.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = function(store) {
  return {
    userList: store.admin.users
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {

  return {
    get_users: function() {
      dispatch(attempt_get_users());
    },
    add_user: function(name, email, phone_number) {
      console.log("add_user from Event");
      dispatch(attempt_add_user(name, email, phone_number));
    }
  };
};
// ====================================




export default connect(mapStateToProps, mapDispatchToProps)(Event);
