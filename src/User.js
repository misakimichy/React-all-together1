import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    return (
        <li className="user">
        </li>
    );
};

// Add PropTypes
User.propTypes = {
    user: PropTypes.array.isRequired,
    numOfGamePlayed: PropTypes.string.isRequired,
}

export default User
