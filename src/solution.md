### How I solved.
This is a note how I solved this exercise based on the given starter template. This is the exercise of lesson 3 State Management, React Nanodegree by Udacity.

**Task**: 
Create a React app that lets us add a user's first name, last name, and
username. When the user is added, the number of games that he/she has played is
defaulted to 0. Each username has to be unique, so we cannot add multiple users
with the same username. When someone clicks "Add" but the username already
exists, the app should not allow for a duplicate user to be added and should
show an error message instead.

The app should also display a list of users, specifically their usernames
and the number of games they've played (which is defaulted to 0). If someone
tries to add a user when one of the fields is empty, the "Add" button should
be disabled.

We should also have a button that lets us toggle between showing and hiding
the number of games the users have played. For example, the button can start
out as "Hide the Number of Games Played" and the app can display "username1
played 0 games." Clicking that button should change the button text to
"Show the Number of Games Played" and the displayed username and score can be
changed to "username1 played \* games."

This practice exercise will help you cement your understanding of where to put
state, how to update and access state, when to use stateless functional
components, and how to use controlled components.


I followed steps from the Thinking in React Guide.

## Step 1. Break down the app into a hierarchy of components. Draw a box around each React component.
|- App

|-- AddUser

|-- UserInfo

|--- User


## Step 2. Determine the data in our app.
(1) names - first name, last name and username in AddUser

(2) users - check if the user already exists in UserList

(3) userExist - return boolean. If it's true, show error message if the user already exists in AddUser. If it's false, add this user as a new user.

(4) gamePlayedMessage - toggle message button to show the number of games the users played.

(5) number of games played - default is 0 

## Step 3. Figure out the data that should be a part of our state:
Is it passed in from a parent via props? If so, it probably isn’t state.

Does it remain unchanged over time? If so, it probably isn’t state.

Can you compute it based on any other state or props in your component? If so, it isn’t state.

(1) names - state

(2) users - state

(3) userExist - not state

(4) gamePlayedMessage - state

(5) number of games played - not state

## Step 4. Identify where each piece of state lives.
Identify every component that renders something based on that state.

If multiple components need the same piece of state, put that piece of state into those components' parent-most component.

If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.


- names

    - In AddUser component
    

- users 

    - AddUser component renders the error message when the username is already taken. The UserList renders the data.

- userExist

    - Show the error message based on the boolean in AddUser component.

- gamePlayedMessage

    - Used in UserInfo and User component.

## Step 5. Add Inverse Data Flow.
State should be updated inside of the component where that state lives. If we pass state down from component A to component B and then need to update the state based on something that happened in component B, we can do so via callbacks: Component A will not only pass state to Component B, but it will also pass a callback function that will fire whenever the state should be updated.