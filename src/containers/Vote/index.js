import React from 'react';
import { connect } from 'react-redux';
import VoteForm from '../../components/VoteForm';
import {
  attempt_cast_vote,
  attempt_get_poll}
  from '../../actions/voteActions.js';


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


const Vote = React.createClass({
  componentDidMount: function() {
    this.props.attempt_get_poll(getParameterByName('pollID'))
  },
  render: function() {
    return (
      <VoteForm
        attempt_cast_vote={this.props.attempt_cast_vote}
        poll={this.props.poll}
        cast_vote={this.props.cast_vote}
      />
    );
  }

});

// ===================================

Vote.contextTypes = {
  store: React.PropTypes.object
};

const mapStateToProps = function(store) {
  console.log("store: ");
  console.log(store);
  return {
    poll: store.vote.poll
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {

  return {
    cast_vote: function(voteID) {
      dispatch(attempt_cast_vote(
        getParameterByName('eventID'),
        getParameterByName('pollID'),
        getParameterByName('userID'),
        voteID));
    },
    attempt_get_poll: function(pollID) {
      dispatch(attempt_get_poll(pollID));
    }
  };
};
// ====================================




export default connect(mapStateToProps, mapDispatchToProps)(Vote);

// export default Vote;
