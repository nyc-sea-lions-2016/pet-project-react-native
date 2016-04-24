'use strict';
var React = require('react-native');

var {
  StyleSheet,
  Image,
  Text,
  View,
} = React;

var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;

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
    );
  }
};

var styles = StyleSheet.create({
  loginContainer: {
    marginTop: 150,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBump: {
    marginBottom: 15,
  },
});

module.exports = Login;
