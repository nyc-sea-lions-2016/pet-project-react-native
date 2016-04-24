'use strict';
var React = require('react-native');


var {
  StyleSheet,
  Image,
  Text,
  View,
  Component,
} = React;

var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;
var Video = require('react-native-video');
// import Video from 'react-native-video';

var FB_PHOTO_WIDTH = 200;

class Login extends Component {
  constructor(props) {
   super(props);
   this.state = {
     user: null,
   };
 }
  render() {
    var _this = this;
    var user = this.state.user;

    return (
      <View style={styles.background}>
        <Image source={{uri: "https://49.media.tumblr.com/bf2c50acceda7c5ca82fce9f05b3cbe4/tumblr_o5ezn64DKD1qi4ucgo1_500.gif"}}
               style={styles.backgroundImage}
        />

        <View style={styles.loginContainer}>

          <FBLogin style={{ marginBottom: 10, }}
            permissions={["email","user_friends"]}
            onLogin={function(data){
              console.log("Logged in!");
              console.log(data);
              _this.setState({ user : data.credentials });
            }}
            onLogout={function(){
              console.log("Logged out.");
              _this.setState({ user : null });
            }}
            onLoginFound={function(data){
              console.log("Existing login found.");
              console.log(data);
              _this.setState({ user : data.credentials });
            }}
            onLoginNotFound={function(){
              console.log("No user logged in.");
              _this.setState({ user : null });
            }}
            onError={function(data){
              console.log("ERROR");
              console.log(data);
            }}
            onCancel={function(){
              console.log("User cancelled.");
            }}
            onPermissionsMissing={function(data){
              console.log("Check permissions!");
              console.log(data);
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 380,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
    opacity: 0.8,
  },
});

module.exports = Login;
