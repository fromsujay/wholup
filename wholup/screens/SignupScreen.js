import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Divider } from 'react-native-elements';
import {connect} from 'react-redux';

class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  constructor() {
  super();
  this.state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit() {
    var ctx = this;
    this.props.handleUserValid(this.state.lastName, this.state.firstName, this.state.email);
    fetch('http://10.2.1.20:3001/signup', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: 'firstName='+this.state.firstName+'&lastName='+this.state.lastName+'&email='+this.state.email+'&password='+this.state.password
          }).then(function(response) {
          return response.json();
        }).then(function(data) {
          ctx.props.navigation.navigate('SettingsStack')
        }).catch(function(error) {
        });
  }

  render() {

    return (
        <View style={styles.components}>

        <FormInput placeholder='first name'
        onChangeText={(valueFirstName) => this.setState({firstName: valueFirstName})}

        />
        <FormInput placeholder='last name'
        onChangeText={(valueLastName) => this.setState({lastName: valueLastName})}

        />
        <FormInput placeholder='email'
        onChangeText={(valueEmail) => this.setState({email: valueEmail})}

        />
        <FormInput placeholder='password'
        onChangeText={(valuePassword) => this.setState({password: valuePassword})}

        />
        <Button
         title='Sign Up'
         onPress={this.handleSubmit}
         buttonStyle={{
         backgroundColor: '#ED655F',
         borderRadius: 12,
         marginTop: 30,
         }}
        />

         </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  components: {
    marginTop: 20,
    marginBottom: 20
  }
});

function mapDispatchToProps(dispatch) {
  return {
    handleUserValid: function(nameUser, firstNameUser, emailUser) {
        dispatch({type: 'setUser', name: nameUser, firstName: firstNameUser, email: emailUser})
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(SignupScreen);
