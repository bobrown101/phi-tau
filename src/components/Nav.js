import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = React.createClass({
    render () {
        return (


            <div className="top-bar animated fadeIn">

    <div className="left-right-container">
        <div className="item-container left">
            <div className="item animated fadeIn">
                <IndexLink to="/" className="link">Home</IndexLink>
            </div>
            <div className="item animated fadeIn">
                <Link to="/fuel-savings" className="link">Example App</Link>
            </div>
            <div className="item animated fadeIn">
                <a href="" className="link">Local History</a>
            </div>
            <div className="item animated fadeIn">
                <a href="" className="link">National History</a>
            </div>
            <div className="item animated fadeIn">
                <Link to="/about" className="link">About</Link>
            </div>
        </div>
        <div className="item-container right">
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
