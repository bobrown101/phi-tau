import React, { PropTypes } from 'react';


const AngledDivider = React.createClass({
    propTypes: {
        reversed: PropTypes.boolean
    },
    render () {
        if(this.props.reversed) {
            return (
                <section className="angled-divider reversed" >
                </section>
            );
        }else{
            return (
                <section className="angled-divider" >
                </section>
            );
        }

    }
});

export default AngledDivider;
