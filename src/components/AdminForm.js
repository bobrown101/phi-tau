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

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>

                  {this.props.userList.map(function(listValue){
                    return (
                      <tr key={listValue._id}>
                        <td>{listValue.name}</td>
                        <td>{listValue.phone_number}</td>
                      </tr>
                    )
                  })}

              </tbody>
            </table>

          <h4>Add New</h4>

          <input type="text" placeholder="name" onChange={this.handleNameChange}/>
          <input type="text" placeholder="email" onChange={this.handleEmailChange}/>
          <input type="text" placeholder="phone number" onChange={this.handlePhoneNumberChange}/>

          <button className="hollow button gold small-12 medium" onClick={this.addNewUser} >Submit New Person</button>


          <hr/>

          {this.props.eventsList.map(function(event){
            return(
              <Link to={"/event/" + event._id} key={event._id}>{event.eventName}</Link>
            );
          })}

          <input type="text" placeholder="Event Name" onChange={this.handleEventNameChange}/>
          <a className="hollow button gold small-12 medium" onClick={this.createNewEvent}>Create Event and Take Attendance</a>
        </CenteredContainer>
      </Section>
    );
  }

});

export default AdminForm;
