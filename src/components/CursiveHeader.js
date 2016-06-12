import React, { PropTypes } from 'react';

const CursiveHeader = React.createClass({
    propTypes: {
        children: PropTypes.element
    },
    render () {
        return (
            <h2 className="cursive-header">{this.props.children}</h2>
        );
    }
});

export default CursiveHeader;
