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

import Homepage from './homepage';
import UsersShow from './UsersShow';

class PetProject extends Component {
  onRightButtonPress() {
    this.refs.nav.push({
        title: 'Favorites',
        component: UserShow
    })
  }
  onLeftButtonPress() {
    this.refs.nav.push({
      title: 'Profile',
      component: UsersEdit
    })
  }
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.container}
        initialRoute={{
          component: Homepage,
          title: 'Next Best Friend',
          rightButtonTitle: 'Favorites!',
          onRightButtonPress: this.onRightButtonPress,
          leftButtonTitle: 'Settings',
          onLeftButtonPress: this.onLeftButtonPress,
        }}
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
