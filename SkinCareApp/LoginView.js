import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
  PixelRatio, TouchableOpacity, Image,
  Platform, TouchableWithoutFeedback,
  DatePickerAndroid, Slider, Alert, Dimensions } from 'react-native';
  import UserView from './UserView';
import SignupView from './SignupView';
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      alert: "",
      username: 'Username',
      password: 'Password',
      email: '',
      userID : 0,
      isSignup: 0,
      isLogin: 0
    };
    //this.change = props.changeRoute;
  }

  _onPressSignup() {
  this.setState({isSignup:1});
  }
  _onPressLogin() {
    fetch("https://lit-gorge-31410.herokuapp.com/user-bynamepasswd?username=" + "\'" + this.state.username + "\'" + "&password=" + "\'" + this.state.password + "\'", {method: "GET"})
    .then((response) =>  response.json())
    .then((responseData) => {
      if (responseData == ""){
        Alert.alert(
      "The username or password does not exist. Please try again.");
        this.setState({
          username: "username",
          password: "password",
          isLogin: 0
        });

      }
      else {this.setState({data: responseData[0],
        userID: responseData[0].id,
        username: responseData[0].username,
        password: responseData[0].password,
        email: responseData[0].email
      });
    }
    })
    .done();

    this.setState({isLogin:1});
  }


  renderSignupView() {
     return (

       <SignupView />
     );
   }
   renderUserView() {
      return (

        //


        <UserView userID={this.state.userID}/>
      );
    }
  render() {
    if (this.state.isSignup) {
      return this.renderSignupView();
    }
    else if(this.state.isLogin){
      return this.renderUserView();
    }
    else{
    return (
      <View style={styles.container}>

      {/* Header for showing user profile picture/ name. Dummy data for now */}
      <View style={{backgroundColor: '#62d7df',height: 90}}>

          <Text style={styles.title}>SK.IN</Text>

      </View>

<View>
          <Text style={styles.message}>{this.state.text}</Text>

      </View>
        {/* Username */}
        <View style={styles.pad}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder = {this.state.username}
            onChangeText={(username) => this.setState({username})}
          />
        </View>

        {/* password */}
        <View style={styles.pad}>
          <Text style={styles.label}>Password:</Text>
          <TextInput secureTextEntry={true} style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder = {this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </View>

        <View style={styles.buttons}>
          {/* Signup button */}
          <TouchableOpacity onPress={this._onPressLogin.bind(this)}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          {/* Signup button */}
          <TouchableOpacity onPress={this._onPressSignup.bind(this)}>
            <Text style={styles.button}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>


    )
  }}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
    padding: 15
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 5
  },
  pad: {
    paddingTop: 25
  },
  label: {
    color: '#222',
    fontSize: 15,
  },
  title: {
    color: 'white',
    fontSize: 70,
    textAlign: 'center'
  },
  message: {
    color: 'green',
    fontSize: 15,
    textAlign: 'center'
  },
  errmessage: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#fad900',
    color: 'white',
    width: 328,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  dateButton: {
    color: '#222',
    fontSize: 15,
    backgroundColor: '#d8f5d1',
    borderRadius: 5,
    padding: 5
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  ratingStyle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  prodUsed: {
    paddingLeft: 20,
    fontSize:15,
    color: '#222',
    backgroundColor: '#d8f5d1'
  }
});
