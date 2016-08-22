import React, { PropTypes } from 'react';

const Section = React.createClass({
    propTypes: {
        children: PropTypes.element,
        inverted: PropTypes.boolean,
        lasertag: PropTypes.boolean
    },
    render () {

        const classes = "small-12 columns section-container" +
        (this.props.inverted ? " inverted" :'') +
        (this.props.lasertag ? " lasertag" :'');
        return (
            <section className={classes}>
                    {this.props.children}
            </section>
        );


    }
});

export default Section;
