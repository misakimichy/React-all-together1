import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User.js';

class UserInfo extends Component {
    state = {
        numOfGamePlayed: '',
    };

    // Create toggle message
    toggleGamePlayedMessage = () => {
        this.state(prevState => ({
            numOfGamePlayed: prevState,
        }));
    };
    
    render() {
        const { numOfGamePlayed } = this.state;
        const { users } = this.props;
        return (
            <div>
                <h1>User</h1>
                {users.length > 0 ? (
                    <button
                    className="played-button"
                    onClick={this.toggleGamePlayedMessage}
                >
                    {numOfGamePlayed ? 'Hide ' : 'Show '}
                    The Number of Game Played
                </button>
                ) : (
                    ''
                )}
                <ul>
                    {users.map(user => (
                        <User key={user.username} user={user} numOfGamePlayed={numOfGamePlayed} />
                    ))}
                </ul>
            </div>
        );
    }
}

// Add PropTypes
UserInfo.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UserInfo;
