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
  // getDefaultProps: function() {
  //   return {
  //     optionsList: []
  //   };
  // },
  getInitialState: function(){
    return {

    };
  },
  render: function() {

    return (

      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>Attendance</CursiveHeader>

        <div className="user-list">

          {this.props.userList.map(function(user){

            return(
              <div className="user-list-item row">
                <div className="user-list-name small-2 columns">{user.name}</div>

                <div className="user-attendance-options small-10 columns">
                    <div className="small-6 medium-3 columns">
                      <input className="user-list-radio-button " type="radio" value="Present" id="present" required />
                      <div className="user-list-label" for="pokemonRed">Present</div>
                    </div>
                    <div className="small-6 medium-3 columns">
                      <input className="user-list-radio-button " type="radio" value="absent" id="absent" required />
                      <div className="user-list-label" for="pokemonRed">Absent</div>
                    </div>
                    <div className="small-6 medium-3 columns">
                      <input className="user-list-radio-button " type="radio" value="excused" id="excused" required />
                      <div className="user-list-label" for="pokemonRed">Excused</div>
                    </div>
                    <div className="small-6 medium-3 columns">
                      <input className="user-list-radio-button " type="radio" value="coop" id="coop" required />
                      <div className="user-list-label" for="pokemonRed">Co-op</div>
                    </div>

                </div>
              </div>



            )
          })}

        </div>



      </Section>
    );
  }

});

export default EventForm;
