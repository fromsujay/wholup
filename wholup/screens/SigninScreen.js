import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Divider } from 'react-native-elements';
import {connect} from 'react-redux';


class SigninScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };


  constructor() {
  super();
  this.state = {
    email: '',
    password: '',
    errorMessage: false
  };
  this.handleSignin = this.handleSignin.bind(this);
  }


  handleSignin(){
    var ctx = this;
    fetch('http://10.2.1.20:3001/signin?email='+this.state.email+'&password='+this.state.password)
    .then(function(response){
      return response.json();
    }).then(function(data){
      if (data) {
        ctx.props.navigation.navigate('SettingsStack');
        ctx.props.handleUserValid(data.lastName, data.firstName, data.email);
      } else {
        ctx.setState({
          errorMessage: true
        });
      }
    }).catch(function(error){
      console.log('Request failed', error)
    });
  }

  render() {
    return (

      <View style={styles.components}>

          <FormInput placeholder='email'
          onChangeText={(valueEmail) => this.setState({email: valueEmail})}

          />
          <FormInput placeholder='password'
          onChangeText={(valuePassword) => this.setState({password: valuePassword})}

          />

          {this.state.errorMessage
            ?<FormValidationMessage>Une erreur didentification à eu lieu. Veuillez ressayer.</FormValidationMessage>
            :<View></View>}

          <Button
           title='Sign In'
           onPress={this.handleSignin}
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
        dispatch({ type: 'setUser', name: nameUser, firstName: firstNameUser, email: emailUser})
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(SigninScreen);
