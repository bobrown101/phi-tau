let React = require('react');

// import { Link } from 'react-router';
import Section from './Section.js';
import CursiveHeader from './CursiveHeader.js';
import CenteredContainer from './CenteredContainer.js';
import CircularProgess from'./CircularProgress.js';

let PollForm = React.createClass({
  render: function() {
    let currentPoll = this.props.currentPoll;
    let currentEvent = this.props.currentEvent;

    console.log("currentEvent", currentEvent.usersPresent);
    let numUsers = currentEvent.usersPresent.length;

    let userNotVoted = currentEvent.usersPresent.filter(function(obj){
      let userVoted = false;
      currentPoll.usersVoted.forEach(function(obj2){
        if(obj._id == obj2._id){
          userVoted = true;
        }
      })

      let userNotVoted = !userVoted;

      return userNotVoted;
    });

    let bottomMessage = "";

    if(userNotVoted.length == 0){
      bottomMessage = <h5>Everyone Has Voted!</h5>;
    }else{
      bottomMessage = <h3 className="styled-header">User Who Haven't Voted</h3>;
    }

    return (

      <Section>
        <CursiveHeader>Poll: {currentPoll.name}</CursiveHeader>
        <div className="hollow button gold medium"
          disabled={userNotVoted.length == 0}
          onClick={() => this.props.notify_users(currentEvent._id, currentPoll._id)}
          >Notify Users</div>
        <div className="row">

          {currentPoll.options.map(function(obj){
            let progressWidth = ((obj.votes/numUsers) * 100) + "%";
            return (

              // <div className="medium-6 small-12 columns">
                // <CenteredContainer>

                  <div className="small-12 medium-8 medium-offset-2 poll-progressbar">
                    <h2 className="styled-header text-center progress-label">{obj.name + " - " + obj.votes + " votes"}</h2>

                    <svg className="progress-div" width={progressWidth} />

                  </div>

                  /* <CircularProgess radius="50" percentage="50" strokeWidth="10"/> */


                // </CenteredContainer>
              // </div>

            );
          })}

          {


          }


          {bottomMessage}
          {userNotVoted.map(function(obj){
                  return (
                    <a>{obj.name}</a>
                  );
                })}

        </div>
      </Section>


    );
  }

});

export default PollForm;
