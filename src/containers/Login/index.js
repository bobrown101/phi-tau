import React from 'react';
import LoginForm from '../../components/LoginForm';
import { connect } from 'react-redux';
import {attempt_login} from '../../actions/loginActions.js';

const LoginPage = React.createClass({
  getInitialState: function(){
    return{
      email: '',
      password: ''
    };
  },
  handleEmailChange: function(e) {
     this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
     this.setState({password: e.target.value});
  },
  render() {

    return (
      <LoginForm
        attempt_login={this.props.attempt_login}
        failed_attempt={this.props.failed_attempt}
        message={this.props.message}
        />
    );
  }

});

LoginPage.contextTypes = {
  store: React.PropTypes.object
};
const mapStateToProps = function(store) {
  console.log("store");
  console.log(store);

  return {
    failed_attempt: store.authentication.failed_attempt,
    message: store.authentication.message
  };
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const mapDispatchToProps = function(dispatch, ownProps) {
  console.log("next_param");
  console.log(getParameterByName('next'));
  return {
    attempt_login: function(email,password) {
      dispatch(
        attempt_login(email, password, getParameterByName('next'))
      );
    }
    // toggleActive: function() {
    //   dispatch({ ... });
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
// export default LoginPage;
