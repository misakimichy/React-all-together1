import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User.js';

class UserInfo extends Component {
    state = {
        gamePlayed: true,
    };

    // Create toggle message and update state
    toggleGamePlayedMessage = () => {
        this.setState(prevState => ({
            gamePlayed: !prevState.gamePlayed,
        }));
    };
    
    render() {
        const { gamePlayed } = this.state;
        const { users } = this.props;
        return (
            <div>
                {users.length > 0 ? (
                    <div>
                        <h1>User</h1>
                        <button
                            className="played-button"
                            onClick={this.toggleGamePlayedMessage}
                        >
                            {gamePlayed ? 'Hide ' : 'Show '}The Number of Game Played
                        </button>
                    </div>
                    ) : (
                        ''
                )}
                <ul>
                    {users.map(user => (
                        <User key={user.username} user={user} gamePlayed={gamePlayed} />
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
