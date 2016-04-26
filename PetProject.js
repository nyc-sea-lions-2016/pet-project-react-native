'use strict';

var React = require("react-native");

var {
  Component,
  StyleSheet,
  ScrollView,
  Text,
  View,
  NavigatorIOS,
} = React;

import Login from './FacebookLogin';
import Homepage from './homepage';
import UsersShow from './UsersShow';
import ShelterMap from './shelterMap';
import UsersEdit from './UsersEdit';


class PetProject extends Component {
  render() {
    return (
        <NavigatorIOS
          ref="nav"
          style={styles.container}
          initialRoute={{
            component: Login,
            title: 'Next Best Friend',
          }}
          tintColor="#FFFFFF"
          barTintColor="#183E63"
          titleTextColor="#FFFFFF"
          translucent={true}
        />

    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000000',
  },
})

module.exports = PetProject;
