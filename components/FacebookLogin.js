'use strict';
import FBLogin from 'react-native-facebook-login';
import Video from 'react-native-video';
import UsersShow from './UsersShow';
import ShelterMap from './shelterMap';
import UsersEdit from './UsersEdit';
import Homepage from './homepage';
import React from 'react-native';
import RNGeocoder from 'react-native-geocoder';

var {
  StyleSheet,
  Image,
  Text,
  View,
  Component,
} = React;

var FBLoginManager = require('NativeModules').FBLoginManager;

var CREATE_USER = 'http://localhost:3000/users'
var FB_PHOTO_WIDTH = 200;

export default class Login extends Component {
  constructor(props) {
   super(props);
   this.state = {
     currentUser: null,
   };
 }
 onRightButtonPress() {
   this.props.navigator.push({
       title: 'Favorites',
       component: UsersShow
   })
 }
 onLeftButtonPress() {
   this.props.navigator.push({
     title: 'Map',
     component: ShelterMap
   })
 }
 createUser(user){
   navigator.geolocation.getCurrentPosition(
     (position) => {
       var cords = {
         latitude: parseFloat(JSON.stringify(position.coords.latitude)),
         longitude: parseFloat(JSON.stringify(position.coords.longitude))
       };
       RNGeocoder.reverseGeocodeLocation(cords, (err, location) => {
         if (err) {
           return;
         }
         user.preferred_location = location[0].postalCode;
         this.addUser(user);
       });
     },
     (error) => {
       console.log(error.message)
     },
     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
   );
 }
 addUser(user){
   var obj = {
     method: 'POST',
     body: JSON.stringify({user})
   }
  fetch(CREATE_USER, obj)
    .then((response) => response.json())
    .then(this.props.navigator.push({
      title: "Next Best Friend",
      component: Homepage,
      rightButtonTitle: 'Favorites',
      onRightButtonPress: this.onRightButtonPress.bind(this),
      leftButtonTitle: 'Map',
      onLeftButtonPress: this.onLeftButtonPress.bind(this),
    }))
    .done();
}
  render() {
    var _this = this;
    var user = this.state.currentUser;

    return (
      <View style={{flex: 1}}>
        <View style= {styles.background}>
          <Image
          source={require('../images/Dogs-Gif.gif')}
                 style={styles.backgroundImage}
          />
        </View>
        <View style={styles.loginContainer}>

          <FBLogin style={{ marginBottom: 10, }}
            permissions={["public_profile","email","user_friends"]}
            onLogin={(data) => {
              _this.createUser(data);
              _this.setState({ user : data.credentials });
            }}
            onLogout={function(){
              console.log("Logged out.");
              _this.setState({ user : null });
            }}
            onLoginFound={function(data){
              _this.createUser(data)
              _this.setState({ user : data.credentials });
            }}
            onLoginNotFound={function(){
              _this.setState({ user : null });
            }}
            onError={function(data){
              console.log("ERROR");
            }}
            onCancel={function(){
              console.log("User cancelled.");
            }}
            onPermissionsMissing={function(data){
              console.log("Check permissions!");
            }}
          />

        </View>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  loginContainer: {
    marginTop: 150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  bottomBump: {
    marginBottom: 15,
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'stretch',
  },
});
