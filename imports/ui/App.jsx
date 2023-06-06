import React from 'react';
import {Meteor} from "meteor/meteor"
import RegisterForm from './components/RegisterForm';
export const App = () => {

  const user = Meteor.user()


  return (
    <div>
      {
        user ? (
          <div> Logged in as {user.emails[0].address}</div>
        ) : (
        <RegisterForm />
        )
      }
    </div>
  )
};
