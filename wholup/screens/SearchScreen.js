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



class SearchScreen extends React.Component {
  render() {
    return (
        <ScrollView style={styles.container}>
            <List>
             <ListItem
               avatar={
                 <Avatar
                    small
                    rounded
                    title='EC'
                    activeOpacity={0.7}
                    overlayContainerStyle={{backgroundColor: '#D9823C'}}/>
                }
                key="0"
                title="Emilie Carpenter"
                subtitle={
                  <View style={styles.subTitle}>
                    <Text style={styles.contactText}>ec@gmail.com</Text>
                    <Text style={styles.contactText}>company: Deckow-Crist</Text>
                  </View>
                }
                onPress={()=> this.props.handleContact(name='Carpenter', firstName='Emilie', email='ec@gmail.com', companyName='Deckow-Crist')}
            >
            </ListItem>
            <ListItem
              avatar={
                <Avatar
                   small
                   rounded
                   title='JD'
                   activeOpacity={0.7}
                   overlayContainerStyle={{backgroundColor: '#3799E0'}}/>
               }
               key="1"
               title="John Doe"
               subtitle={
                 <View style={styles.subTitle}>
                   <Text style={styles.contactText}>jd@gmail.com</Text>
                   <Text style={styles.contactText}>company: Deckow-Crist</Text>
                 </View>
               }
               onPress={ ()=> this.props.handleContact(name='Doe', firstName='John', email='jd@gmail.com', companyName='Deckow-Crist') }
           >
           </ListItem>
           <ListItem
             avatar={
               <Avatar
                  small
                  rounded
                  title='NP'
                  activeOpacity={0.7}
                  overlayContainerStyle={{backgroundColor: '#1AA487'}}/>
              }
              key="2"
              title="Noel Paganelli"
              subtitle={
                <View style={styles.subTitle}>
                  <Text style={styles.contactText}>np@gmail.com</Text>
                  <Text style={styles.contactText}>company: Deckow-Crist</Text>
                </View>
              }
              onPress={()=> this.props.handleContact(name='Paganelli', firstName='Noel', email='np@gmail.com', companyName='Deckow-Crist') }
            >
            </ListItem>
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

function mapDispatchToProps(dispatch) {
  return {
    handleContact: function(nameContact, firstNameContact, emailContact, companyNameContact) {
        dispatch(
        {type: 'addContact',
        name: nameContact,
        firstName: firstNameContact,
        email: emailContact,
        companyName: companyName}
        )
    }

  }
}

export default connect(
    null,
    mapDispatchToProps
)(SearchScreen);
