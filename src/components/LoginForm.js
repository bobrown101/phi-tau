let React = require('react');
let PropTypes = React.PropTypes;

// import { Link } from 'react-router';
import Section from './Section.js';
import CursiveHeader from './CursiveHeader.js';
import CenteredContainer from './CenteredContainer.js';

let LoginForm = React.createClass({
  propTypes: function() {
    return {
      attempt_login: PropTypes.function.isRequired,
      failed_attempt: PropTypes.boolean,
      message: PropTypes.string
    };
  },
  getInitialState: function(){
    return {
      email: "",
      password: ""
    };
  },
  login: function(){
    this.props.attempt_login(this.state.email, this.state.password);
  },
  handleEmailChange: function(e) {
     this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
     this.setState({password: e.target.value});
  },

  render: function() {
    let error = ``;
    if(this.props.failed_attempt){
      error = (<h5 className="white styled-header">{this.props.message}</h5>);
    }


    let emailClass = "animated fadeInUp delay05";
    let emailError = this.props.errorSource == "email" ? " inputInvalid": "";

    let passwordClass = "animated fadeInUp delay05";
    let passwordError = this.props.errorSource == "password" ? " inputInvalid": "";





    console.log("ayy", this.props.errorSource, emailClass + emailError);
    return (
      <Section>
        <CursiveHeader>{"Login"}</CursiveHeader>
        <CenteredContainer>
          <input className={emailClass + emailError} placeholder="Email" type="email" onChange={this.handleEmailChange}/>
          <input className={passwordClass + passwordError} placeholder="Password" type="password" onChange={this.handlePasswordChange}/>
          <a className="hollow button gold large small-12 animated fadeInUp delay1" onClick={this.login} >Login</a>
          {error}
          <h5 className="white styled-header animated fadeInUp delay15">Forgot Password? <a href="mailto:bobrown101@gmail.com" className="styled-inline-link">Contact Webmaster</a></h5>

        </CenteredContainer>


      </Section>
    );
  }

});

export default LoginForm;
