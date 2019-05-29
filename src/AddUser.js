import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
    state = {
        user: {
            firstName:'',
            lastName:'',
            userName:'',
        },
        userExists: false,
    };

    // Check if the user already exists
    ContactExists = currentUsername => {
        const users = this.props.users;

        // Return true when the username exits
        for (let user of users) {
            if (user.username === currentUsername)
            return true;
        }
        return false;
    }

    // Handle the submit
    handleSubmit = event => {
        event.preventDefault();
        const userExists = this.ContactExists(this.state.user.userName);
        
        // Add user when the user doesn't exist
        if(!userExists) {
            this.props.onAddUser(this.state.user);
        }

        this.setState(() => ({userExists,}));
    };

    // Handle the input change
    // Update state
    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState(currentState => ({
            user: {
                ...currentState.user,
                [name]: value,
            },
        }));
    };

    // Rest the input field
    resetButton = () => {
        const { firstName, lastName, username } = this.state.user;
        return firstName === '' || lastName === '' || username === '';
    };

    render() {
        const { firstName, lastName, username } = this.state;
        return(
            <div>
                <h1>New User</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            className="name-input"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={this.handleInputChange}
                            >
                        </input>
                        <input
                            className="name-input"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={this.handleInputChange}
                            >
                        </input>
                        <input
                            className="name-input"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={this.handleInputChange}
                            >
                        </input>
                    </div>
                    <button disabled={this.resetButton()}>Add</button>
                </form>

                {/* Return the error message when the username already exists. */}
                {/* Return empty string when the username is available. */}
                {this.state.userExists ? (
                    <p className="errorMessage">The username already exists.</p>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

// Add PropTypes
AddUser.propTypes = {
    users: PropTypes.array.isRequired,
    onAddUser: PropTypes.func.isRequired,
};

export default AddUser;
