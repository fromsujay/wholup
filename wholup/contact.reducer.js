import React, { Component } from 'react';


export default function(contactList=[], action) {
  if(action.type == 'addContact') {
  var contactListCopy = [...contactList]

  var isContactExist = false;


  for(var i=0; i<contactListCopy.length; i++){
    if(action.email == contactListCopy[i].email){
      isContactExist = true
    }
  }

  if (isContactExist === false) {
    var color;
    var floatColorSelector = 0;
    floatColorSelector= Math.random()*100;
    integerColorSelector = Math.round(floatColorSelector);
    console.log(integerColorSelector);

    if (integerColorSelector<=24) {
      color='#e67e22'
    } else if (integerColorSelector<=49) {
      color='#3498db'
    } else if (integerColorSelector<=74) {
      color='#16a085'
    } else if (integerColorSelector>74) {
      color='#e74c3c'
    }

    var contactInfo = {
      name: name,
      firstName: firstName,
      email: email,
      companyName: companyName,
      color: color
    }
    contactListCopy.push(contactInfo);
  }

      return contactListCopy;

  } else {
      return contactList;
  }

}
