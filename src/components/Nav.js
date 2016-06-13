import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = React.createClass({
    getInitialState: function(){
        return{
            navOpen: false
        };
    },
    toggleHamburger(){
        this.setState({navOpen: !this.state.navOpen}); // eslint-disable-line
    },
    render () {
        return (
            <div className={this.state.navOpen ? "top-bar animated fadeIn open" : "top-bar animated fadeIn"}>
                <div onClick={this.toggleHamburger} className="mobile-hamburger-container">
                    <div className={this.state.navOpen ? "mobile-hamburger open" : "mobile-hamburger"}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="left-right-container">
                    <div className="item-container item-container-left">
                        <div className="item animated fadeIn">
                            <IndexLink to="/" className="link">Home</IndexLink>
                        </div>
                        <div className="item animated fadeIn">
                            <Link to="/local-history" className="link">Local History</Link>
                        </div>
                        <div className="item animated fadeIn">
                            <Link to="/national-history" className="link">National History</Link>
                        </div>
                        <div className="item animated fadeIn">
                            <Link to="/rush" className="link">Rush</Link>
                        </div>
                        <div className="item animated fadeIn">
                            <Link to="/contact" className="link">Contact</Link>
                        </div>
                    </div>
                    <div className="item-container item-container-right">
                        <div className="item animated fadeIn">
                            <a href="#" className="button email-button">Alumni Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Nav;
