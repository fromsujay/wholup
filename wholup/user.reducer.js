import React, { Component } from 'react';

export default function(user={}, action) {

  if(action.type === 'setUser') {

    var userCopy = {...user}

    var color;
    var floatColorSelector = 0;
    floatColorSelector= Math.random()*100;
    integerColorSelector = Math.round(floatColorSelector);

    if (integerColorSelector<=24) {
      color='#e67e22'
    } else if (integerColorSelector<=49) {
      color='#3498db'
    } else if (integerColorSelector<=74) {
      color='#16a085'
    } else if (integerColorSelector>74) {
      color='#e74c3c'
    }


    userCopy.name = action.name;
    userCopy.firstName = action.firstName;
    userCopy.email = action.email;
    userCopy.color = color;

      return userCopy;

  } else {
      return user;
  }

}
