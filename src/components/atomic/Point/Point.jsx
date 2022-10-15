import React from 'react';
import PropTypes from 'prop-types';

export const Point = ({ color, className, ...props }) => {
    const pointStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: color,
    };

    return (
        <div className={className} style={pointStyle} {...props} />
    );
};

Point.propTypes = {
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
};
