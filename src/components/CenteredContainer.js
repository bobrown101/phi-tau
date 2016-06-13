import React, { PropTypes } from 'react';

let divStyle = {
    display: 'table',
    margin: 'auto'
};
const CenteredContainer = React.createClass({
    propTypes: {
        children: PropTypes.element
    },
    render () {
        return (
            <div style={divStyle}>{this.props.children}</div>
        );
    }
});

export default CenteredContainer;
