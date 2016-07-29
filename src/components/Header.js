import React from 'react';

const Header = React.createClass({
    render () {
        return (
            <div id="header-container" className="animated fadeIn">
                {/*<div id="background-image"></div>*/}
                <div id="header" className="text-center">
                    <h1 className="header-large-text animated fadeInDown">PHI KAPPA TAU</h1>
                    <h2 className="header-small-text animated fadeIn">Building Men of Character Since 1966</h2>
                    <h1 className="header-large-text animated fadeInUp fadeIn">GAMMA NU</h1>

                </div>
            </div>
        );
    }
});

export default Header;
