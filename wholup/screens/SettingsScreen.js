import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-elements'
import { Font } from 'expo';
import {connect} from 'react-redux';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Account Settings',
  };


  render() {

    var userInfo = this.props.user;
    var title;
    if(userInfo.firstName) {
      title = userInfo.firstName[0].toUpperCase()+userInfo.name[0].toUpperCase();
    }

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Avatar
           large
           rounded
           title={title}
           activeOpacity={0.7}
           overlayContainerStyle={{backgroundColor: userInfo.color}}/>
        <Text h4 style={{fontFamily: 'open-sans-bold'}}>{userInfo.firstName+" "+userInfo.name}</Text>
        <Text h4>{userInfo.email}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return{user: state.userData}
}

export default connect(
    mapStateToProps,
    null
)(SettingsScreen);
