import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    return (
        <li className="user">
            <p>Username: {props.user.username}</p>
            <p>Number of Games Played: {
                props.user.gamePlayed 
                ? (
                    props.user.numGamePlayed
                ) : (
                    '0'
                )
            }
            </p>
        </li>
    );
};

// Add PropTypes
User.propTypes = {
    user: PropTypes.object.isRequired,
    gamePlayed: PropTypes.bool.isRequired,
}

export default User
