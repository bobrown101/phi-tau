let React = require('react');

import { Link } from 'react-router';
import Section from './Section.js';
import CursiveHeader from './CursiveHeader.js';
// import CenteredContainer from './CenteredContainer.js';


let EventForm = React.createClass({
  propTypes: function() {
    return{
      usersList: React.PropTypes.array.isRequired,
      currentEvent: React.PropTypes.object.isRequired
    };
  },
  getDefaultProps: function() {
    return {
      currentEvent: null,
      userList: []
    };
  },
  componentWillMount: function(){

  },
  userPresent: function(event, user){
    let newUsers = event.usersPresent.filter(function(obj){
      if(obj._id == user._id){
        return true;
      }
      return false;
    });

    if (newUsers.length != 0){
      return true;
    }else{
      return false;
    }

  },
  userAbsent: function(event, user){
    let newUsers = event.usersAbsent.filter(function(obj){
      if(obj._id == user._id){
        return true;
      }
      return false;
    });

    if (newUsers.length != 0){
      return true;
    }else{
      return false;
    }
  },
  userExcused: function(event, user){
    let newUsers = event.usersExcused.filter(function(obj){
      if(obj._id == user._id){
        return true;
      }
      return false;
    });

    if (newUsers.length != 0){
      return true;
    }else{
      return false;
    }
  },
  userCoop: function(event, user){
    let newUsers = event.usersCoop.filter(function(obj){
      if(obj._id == user._id){
        return true;
      }
      return false;
    });

    if (newUsers.length != 0){
      return true;
    }else{
      return false;
    }

  },
  handleNewPollNameChange: function(e) {
    this.setState({newPollName: e.target.value});
  },
  handleNewPollOptionsChange: function(e) {
    let options = e.target.value.split(',');

    this.setState({newPollOptions: options});
  },
  attempt_notify_users: function(eventID, pollID){
    this.props.attempt_notify_users(eventID, pollID);
  },
  create_poll(name, options) {
    this.props.create_poll(this.props.currentEvent._id, name, options);
  },
  render: function() {

    let that = this;

    let currentEvent = this.props.currentEvent;
    console.log("current event: ", currentEvent);


    return (
    <div>
      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>{currentEvent.eventName} - {new Date(currentEvent.eventTime).toDateString()}</CursiveHeader>
        <h2 className="normal-header">Attendance</h2>

        <table className="small-12 medium-8 medium-offset-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>

            {this.props.userList.map(function(user){


              return(
                <tr key={user._id}>
                  <td>{user.name}</td>

                  <td>
                      <div className="user-list-item">
                        <input
                          onClick={
                            () => that.props.set_user_attendance(user, "present")
                          }
                          checked={
                            that.userPresent(currentEvent, user)
                          }
                          name={user._id + "present"}
                          type="radio" value="Present"
                          required
                        />
                      <label htmlFor={user._id + "present"} className="user-list-label">Present</label>
                      </div>
                      <div className="user-list-item">
                        <input
                          onClick={() => { console.log("clicked");that.props.set_user_attendance(user, "absent")}}
                          checked={
                            that.userAbsent(currentEvent, user)
                          }

                          type="radio"
                          value="absent"
                          required
                        />
                      <label htmlFor={user._id + "absent"} className="user-list-label">Absent</label>

                      </div>
                      <div className="user-list-item">
                        <input
                          onClick={() => that.props.set_user_attendance(user, "excused")}
                          checked={
                            that.userExcused(currentEvent, user)
                          }

                          type="radio"
                          value="excused"
                          required
                        />
                      <label htmlFor={user._id + "excused"} className="user-list-label">Excused</label>
                      </div>
                      <div className="user-list-item">
                        <input
                          onClick={() => that.props.set_user_attendance(user, "coop")}
                          checked={
                            that.userCoop(currentEvent, user)
                          }

                          type="radio"
                          value="coop"
                          required
                        />
                      <label htmlFor={user._id + "coop"} className="user-list-label">Co-op</label>
                      </div>
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>



        <div className="small-12 medium-8 medium-offset-2">
          <h2 className="normal-header">Polls</h2>

          <table className="stack">
            <thead>
              <tr>
                <th>Name</th>
                <th>Options</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {currentEvent.polls.map(function(listValue){
                  return (
                    <tr key={listValue._id}>
                      <td><Link to={"/poll/" + currentEvent._id + "/"+ listValue._id} className="styled-inline-link">{listValue.name}</Link></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button className="hollow button gold medium" onClick={() => {that.props.delete_poll(listValue._id)}}>Delete</button>
                      </td>
                    </tr>
                  );
                })}

                <tr key="create_new_user_item">
                  <td><input type="text" placeholder="Name" onChange={that.handleNewPollNameChange}/></td>
                  <td><input type="text" placeholder="Comma separated values" onChange={that.handleNewPollOptionsChange}/></td>
                  <td></td>
                  <td><button className="hollow button gold medium" onClick={() => {that.create_poll(this.state.newPollName, this.state.newPollOptions);}}>Create New Poll</button></td>
                </tr>
            </tbody>
          </table>

        </div>
      </Section>




    </div>
    );
  }

});

export default EventForm;
