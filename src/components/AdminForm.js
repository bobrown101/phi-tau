let React = require('react');
let PropTypes = React.PropTypes;

import { Link } from 'react-router';
import Section from './Section.js';
import CursiveHeader from './CursiveHeader.js';
import CenteredContainer from './CenteredContainer.js';

let AdminForm = React.createClass({
  propTypes: function() {
    return {
      add_user: PropTypes.func.isRequired
    };
  },
  getInitialState: function(){
    return {
      newUserName: "",
      newUserEmail: "",
      newUserEmailValid: false,
      newUserPhoneNumber: "",
      newUserPhoneNumberValid: false,
      newEventName: "",
      // newPollName: "",
      // newPollOptions: ""
    };
  },
  handleEmailChange: function(e) {
    this.newUserValid();
    this.setState({newUserEmail: e.target.value});
  },
  handlePhoneNumberChange: function(e) {
    this.newUserValid();
    this.setState({newUserPhoneNumber: e.target.value});
  },
  handleNameChange: function(e) {
    this.newUserValid();
    this.setState({newUserName: e.target.value});
  },
  addNewUser: function(){
    this.props.add_user(this.state.newUserName, this.state.newUserEmail, this.state.newUserPhoneNumber);
  },
  newUserValid: function(){

    let phone_match = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/;
    let phone_valid = this.state.newUserPhoneNumber.match(phone_match);

    let email_match = /^\S+@\S+\.\S+$/;
    let email_valid = this.state.newUserEmail.match(email_match);

    this.setState({
      newUserEmailValid: email_valid,
      newUserPhoneNumberValid: phone_valid
    });

  },
  handleEventNameChange: function(e) {
     this.setState({newEventName: e.target.value});
  },
  // handleNewPollNameChange: function(e) {
  //   this.setState({newPollName: e.target.value});
  // },
  // handleNewPollOptionsChange: function(e) {
  //   this.setState({newPollOptions: e.target.value});
  // },
  createNewEvent: function(){
    console.log("name: " + this.state.newEventName);
    this.props.create_event(this.state.newEventName);
  },
  // create_poll: function(eventID){
  //   let options = this.state.newPollOptions.split(',');
  //   this.props.create_poll(eventID, this.state.newPollName, options); // TODO - add options. Maybe comma separated?
  // },
  attempt_notify_users: function(eventID, pollID){
    this.props.attempt_notify_users(eventID, pollID);
  },
  render: function() {

    let that = this;

    let newUserEmailFormClass = that.state.newUserEmailValid ? "inputValid" : "inputInvalid";
    let newUserPhoneNumberFormClass = that.state.newUserPhoneNumberValid ? "inputValid" : "inputInvalid";

    console.log("button disabled: ", that.state.newUserEmailValid, that.state.newUserPhoneNumberValid, (!that.state.newUserPhoneNumberValid || !that.state.newUserEmailValid));

    return (

      <Section >
        <CursiveHeader>Admin</CursiveHeader>
        <CenteredContainer>
          <h3 className="white styled-header">Rescouncil Members</h3>
            <table className="stack">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.userList.map(function(listValue){
                    return (
                      <tr key={listValue._id}>
                        <td>{listValue.name}</td>
                        <td>{listValue.phone_number}</td>
                        <td>{listValue.email}</td>
                        <td>
                          <button className="hollow button gold medium" onClick={() => {
                              that.props.delete_user(listValue._id);}
                          }>
                          Delete User
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  <tr key="create_new_user_item">
                    <td><input type="text" placeholder="Name" onChange={this.handleNameChange}/></td>
                    <td><input type="text" placeholder="+1-XXX-XXXX" onChange={this.handlePhoneNumberChange} className={newUserPhoneNumberFormClass}/></td>
                    <td><input type="text" placeholder="Email" onChange={this.handleEmailChange} className={newUserEmailFormClass}/></td>
                    <td><button className="hollow button gold medium" onClick={this.addNewUser} disabled={(!that.state.newUserPhoneNumberValid || !that.state.newUserEmailValid)}>Submit New Person</button></td>
                  </tr>
              </tbody>
            </table>
          <h3 className="white styled-header">Events</h3>

          <table className="stack">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Event Time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

                {this.props.eventsList.map(function(event){
                  return (
                    <tr key={event._id}>
                      <td><Link to={"/event/" + event._id} key={event._id} className="styled-inline-link">{event.eventName}</Link></td>
                      <td>{new Date(event.eventTime).toDateString()}</td>
                        <td>
                          <button className="hollow button gold medium" onClick={() => {
                              that.props.delete_event(event._id);}
                          }>
                          Delete Event
                          </button>
                        </td>
                    </tr>
                  );
                })}

                <tr key="create_new_user_item">
                  <td><input type="text" placeholder="Event Name" onChange={this.handleEventNameChange}/></td>
                  <td></td>
                  <td><a className="hollow button gold small-12 medium" onClick={this.createNewEvent}>Create Event</a></td>
                </tr>

            </tbody>
          </table>


        </CenteredContainer>
      </Section>
    );
  }

});

export default AdminForm;
