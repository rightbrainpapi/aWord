import React, {Component} from 'react';
import {  Text, StyleSheet} from 'react-native';
import firebase from 'firebase';

import {Card, CardSection, Header, Button, Input, Spinner} from './common'
// import {Header} from './common'

//Initialize Firebase
const firebaseConfig = {
      apiKey: "AIzaSyBxh_Q4kZSTWy54uXYHWtyQhc6-7iiJb1M",
      authDomain: "auth-froreel.firebaseapp.com",
      databaseURL: "https://auth-froreel.firebaseio.com",
      projectId: "auth-froreel",
      storageBucket: "auth-froreel.appspot.com",
      messagingSenderId: "1069121699647",
};

export default class Auth extends Component{

  state = {
    email:'',
    password: '',
    error: '',
    loading: false //by default I am not loading anything.

  };

  componentWillMount(){
    firebase.initializeApp(firebaseConfig);
  }

  onButtonPress(){
      //clears the error message if there is on present 
      //and flip loading flag to true
      this.setState({error: '', loading: true});

      //Attempt to authenticate the user
      // line immediately below is destructuring the state
      const {email, password} = this.state;

      firebase.auth().signInWithEmailAndPassword(email, password)
      //if the signin is successful execute the .then below
      .then(this.onLoginSuccess.bind(this)) //passing off this function to a promis to me executed sometime in the future we must bind it.
      // if the signin is unsuccessful exeute the promise below
      .catch(()=> {
        // 1st Fail Case: attempt to create a user account w/ email and password
        firebase.auth().createUserWithEmailAndPassword(email, password)
        //if the createuser is successful execute the .then below
        .then(this.onLoginSuccess.bind(this)) //passing off this function to a promis to me executed sometime in the future we must bind it.
          // if the 1st Fail Case is unsuccessful execute the promise below
          .catch(this.onLoginFail.bind(this));
      });
    }

// Helper Function
    onLoginSuccess(){
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: ''
      })
  }
  
// Helper Function
  onLoginFail(){
    this.setState({error: 'Authentication Failed', loading: false});
  }




  // This is a helper method to toggle between a spinner and a button
  renderButtonORSpinner(){
    //if loading is true return spinner with the prop of small
    if  (this.state.loading){
      return <Spinner size='small'/>
    }

    //otherwise loading must be false so return the button
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
            Log In
      </Button>
    )
     
  }



  render() {
    return (

      <Card>

        <CardSection>
          <Input 
            label='Email'
            placeholder='user@gmail.com' 
            value={this.state.email}
            onChangeText={email => this.setState({email: email})}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry //By listing this prop herre it shows up inside the Input Component as a value true
            label='Password'
            placeholder='password' 
            value={this.state.password}
            onChangeText={password => this.setState({password: password})} //the first password is the text the user just entered.
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButtonORSpinner()}
        </CardSection>

      </Card>


    );
  }
}


const styles = StyleSheet.create({
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color:'red'
  }
});
