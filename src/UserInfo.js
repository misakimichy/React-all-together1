import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                <button
                    className="played-button"
                    onClick={this.toggleGamePlayedMessage}
                >
                    {numOfGamePlayed ? 'Hide ' : 'Show '}
                    The Number of Game Played
                </button>
            </div>
        );
    }
}

// Add PropTypes
UserInfo.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UserInfo;
