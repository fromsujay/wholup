import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Button, List, ListItem, Avatar, Text } from 'react-native-elements'
import {connect} from 'react-redux';



class FollowingScreen extends React.Component {
  render() {

    var ContactListItem = this.props.contacts.map(function(contact, i){

      return(
        <ListItem
          key={i}
          avatar={
          <Avatar
            small
            rounded
            title={contact.firstName[0].toUpperCase()+contact.name[0].toUpperCase()}
            overlayContainerStyle={{backgroundColor: contact.color}}/>}
          title={contact.firstName+" "+contact.name}
          subtitle={
            <View style={styles.subtitle}>
              <Text style={styles.ratingText}>{contact.email}</Text>
              <Text style={styles.ratingText}>company: {contact.companyName}</Text>
            </View>
          }
        />
      )
    })


    return (
        <ScrollView style={styles.container}>

            <List>
             {ContactListItem}
            </List>

        </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 15
  },
  contactText: {
    color: '#A5A6A8'
  },
  subTitle: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 5
  }
});

function mapStateToProps(store) {
  return { contacts: store.contactList }
}

export default connect(
    mapStateToProps,
    null
)(FollowingScreen);
