import React, { PropTypes } from 'react';

const CursiveHeader = React.createClass({
    propTypes: {
        children: PropTypes.element
    },
    render () {
        return (
            <h2 className="cursive-header animated fadeInUp">{this.props.children}</h2>
        );
    }
});

export default CursiveHeader;
