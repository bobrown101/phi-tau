let React = require('react');
let PropTypes = React.PropTypes;
// import { push } from 'react-router-redux';


// import { Link } from 'react-router';
import Section from './Section.js';
import CursiveHeader from './CursiveHeader.js';
// import CenteredContainer from './CenteredContainer.js';
import SweetAlert from 'sweetalert-react';


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
        <SweetAlert
          show={this.props.failed_attempt == true}
          type={this.props.failed_attempt? "error" : "success"}
          title={this.props.failed_attempt? "Uh-oh!" : "Success!"}
          text={this.props.message}
          onConfirm={() => that.props.clear_status()}
        />
        <SweetAlert
          show={this.props.failed_attempt == false}
          type={"success"}
          title={"Success!"}
          text={this.props.message}
          onConfirm={() => that.props.clear_status()}
        />
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
