let React = require('react');
let PropTypes = React.PropTypes;

// import { Link } from 'react-router';
import Section from './Section.js';
import CursiveHeader from './CursiveHeader.js';
// import CenteredContainer from './CenteredContainer.js';


let EventForm = React.createClass({
  // propTypes: function() {
  //   return{
  //     optionsList: React.PropTypes.func.isRequired
  //   };
  // },
  getDefaultProps: function() {
    return {
      currentEvent: null,
      userList: []
    };
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
  componentWillMount: function(){

  },
  render: function() {

    let that = this;

    let currentEvent = this.props.currentEvent;
    console.log("current event: ", currentEvent);


    return (

      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>Attendance</CursiveHeader>
        <h4 className="styled-header">{currentEvent.eventName} - {new Date(currentEvent.eventTime).toDateString()}</h4>

        <div className="user-list">

          {this.props.userList.map(function(user){


            return(
              <div className="user-list-item row" key={user._id}>
                <div className="user-list-name small-2 columns">{user.name}</div>

                <div className="user-attendance-options small-10 columns">
                    <div className="small-6 medium-3 columns">
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
                    <label for={user._id + "present"} className="user-list-label">Present</label>
                    </div>
                    <div className="small-6 medium-3 columns">
                      <input
                        onClick={() => that.props.set_user_attendance(user, "absent")}
                        checked={
                          that.userAbsent(currentEvent, user)
                        }

                        type="radio"
                        value="absent"
                        required
                      />
                      <label for={user._id + "absent"} className="user-list-label">Absent</label>

                    </div>
                    <div className="small-6 medium-3 columns">
                      <input
                        onClick={() => that.props.set_user_attendance(user, "excused")}
                        checked={
                          that.userExcused(currentEvent, user)
                        }

                        type="radio"
                        value="excused"
                        required
                      />
                      <label for={user._id + "excused"} className="user-list-label">Excused</label>
                    </div>
                    <div className="small-6 medium-3 columns">
                      <input
                        onClick={() => that.props.set_user_attendance(user, "coop")}
                        checked={
                          that.userCoop(currentEvent, user)
                        }

                        type="radio"
                        value="coop"
                        required
                      />
                      <label for={user._id + "coop"} className="user-list-label">Co-op</label>
                    </div>
                </div>
              </div>
            );
          })}

        </div>


      </Section>
    );
  }

});

export default EventForm;
