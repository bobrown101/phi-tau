let React = require('react');
let PropTypes = React.PropTypes;

import { Link } from 'react-router';
import Section from './Section.js';
import CursiveHeader from './CursiveHeader.js';
import CenteredContainer from './CenteredContainer.js';

let AdminForm = React.createClass({
  getInitialState: function(){
    return {
      newUserEmail: "",
      newUserPassword: "",
      newUserName: "",
      newEventName: "",
      newPollName: "",
      newPollOptions: ""
    };
  },
  handleEmailChange: function(e) {
     this.setState({newUserEmail: e.target.value});
  },
  handlePhoneNumberChange: function(e) {
     this.setState({newUserPhoneNumber: e.target.value});
  },
  handleNameChange: function(e) {
     this.setState({newUserName: e.target.value});
  },
  addNewUser: function(){
    this.props.add_user(this.state.newUserName, this.state.newUserEmail, this.state.newUserPhoneNumber);
  },
  handleEventNameChange: function(e) {
     this.setState({newEventName: e.target.value});
  },
  handleNewPollNameChange: function(e) {
    this.setState({newPollName: e.target.value})
  },
  handleNewPollOptionsChange: function(e) {
    this.setState({newPollOptions: e.target.value})
  },
  createNewEvent: function(){
    console.log("name: " + this.state.newEventName);
    this.props.create_event(this.state.newEventName);
  },
  create_poll: function(eventID){
    let options = this.state.newPollOptions.split(',');
    this.props.create_poll(eventID, this.state.newPollName, options) // TODO - add options. Maybe comma separated?
  },
  attempt_notify_users: function(eventID, pollID){
    this.props.attempt_notify_users(eventID, pollID);
  },
  render: function() {
    // console.log(this.state);
    // console.log("rendering form");
    // console.log(this.props.eventsList);

    let that = this;

    return (

      <Section >
        {/*<AngledDivider/>*/}
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
                        <td>Delete {listValue._id}</td>
                      </tr>
                    )
                  })}

                  <tr key="create_new_user_item">
                    <td><input type="text" placeholder="name" onChange={this.handleNameChange}/></td>
                    <td><input type="text" placeholder="phone number" onChange={this.handlePhoneNumberChange}/></td>
                    <td><input type="text" placeholder="email" onChange={this.handleEmailChange}/></td>
                    <td><button className="hollow button gold medium" onClick={this.addNewUser} >Submit New Person</button></td>
                  </tr>
              </tbody>
            </table>

          <hr/>
          
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
                      <td>{event.eventTime}</td>
                      <td>Delete {event._id}</td>
                    </tr>
                  )
                })}

                <tr key="create_new_user_item">
                  <td><input type="text" placeholder="Event Name" onChange={this.handleEventNameChange}/></td>
                  <td><input type="text" placeholder="phone number" onChange={this.handlePhoneNumberChange}/></td>
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
