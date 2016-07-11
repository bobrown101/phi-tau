import React from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth(this.props.authenticated);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.authenticated);
        }

        checkAuth (authenticated) {
            if (!authenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                this.props
                    .dispatch(push(`/login?next=${redirectAfterLogin}`));
            }
        }

        render () {
            return (
                <div>
                    {this.props.authenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        authenticated: state.authentication.authenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}
