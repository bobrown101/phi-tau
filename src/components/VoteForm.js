let React = require('react');
let PropTypes = React.PropTypes;

// import { Link } from 'react-router';
import Section from './Section.js';
import CursiveHeader from './CursiveHeader.js';
import CenteredContainer from './CenteredContainer.js';


let VoteForm = React.createClass({
  propTypes: function() {
    return{
      optionsList: React.PropTypes.func.isRequired
    };
  },
  getDefaultProps: function() {
    return {
      optionsList: []
    };
  },
  getInitialState: function(){
    return {

    };
  },
  render: function() {
    console.log(this.props.poll);
    let that = this;
    return (

      <Section >
        {/*<AngledDivider/>*/}
        <CursiveHeader>Vote On: {this.props.poll.name}</CursiveHeader>


          {this.props.poll.options.map(function(listValue){
            return  <a className="hollow button gold small-12 large"
                      key={listValue._id}
                      onClick={() => that.props.cast_vote(listValue._id)}>
                      {listValue.name}
                    </a>;
          })}
      </Section>
    );
  }

});

export default VoteForm;
