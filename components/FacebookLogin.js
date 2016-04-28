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

var FB_PHOTO_WIDTH = 200;
var CREATE_USER = 'https://nextbestfriend.herokuapp.com/users';
var FBLoginManager = require('NativeModules').FBLoginManager;

export default class Login extends Component {
  constructor(props) {
   super(props);
   this.state = {
     user: null,
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
 fetchData(user) {
   var photoApi = `https://graph.facebook.com/v2.3/${user.credentials.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.credentials.token}`;
   fetch(photoApi)
      .then((response) => response.json())
      .then((photo) => {
        var infoApi = `https://graph.facebook.com/v2.3/${user.credentials.userId}?fields=name,email&access_token=${user.credentials.token}`;
        fetch(infoApi)
         .then((response) => response.json())
         .then((info) => {
           user.photo = {
             url : photo.data.url,
           }
           user.info = {
             name : info.name,
             email: info.email,
           },
           this.addUser(user);
           });
         })
      .done();
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
         this.fetchData(user)
       });
     },
     (error) => {
       var cords = {
         latitude: parseFloat('40.706'),
         longitude: parseFloat('-74.009')
       };
       RNGeocoder.reverseGeocodeLocation(cords, (err, location) => {
         if (err) {
           return;
         }
         user.preferred_location = location[0].postalCode;
         this.fetchData(user)
       });
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
      // passProps: {currentUser: this.props.currentUser}
    }))
    .done();
 }

  render() {
    var self = this;
    var user = this.state.user;

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
              self.createUser(data);
              self.setState({ user : data.credentials });
            }}
            onLogout={function(){
              console.log("Logged out.");
              self.setState({ user : null });
            }}
            onLoginFound={function(data){
              self.createUser(data)
              self.setState({ user : data.credentials });
            }}
            onLoginNotFound={function(){
              self.setState({ user : null });
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
