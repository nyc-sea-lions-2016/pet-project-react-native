'use strict';
import React from "react-native";
import Login from './FacebookLogin';
import UsersShow from './UsersShow';
import ShelterMap from './shelterMap';
import Homepage from './homepage';
import UsersEdit from './UsersEdit';

var {
  Component,
  StyleSheet,
  ScrollView,
  Text,
  View,
  NavigatorIOS,
} = React;

export default class PetProject extends Component {
  onRightButtonPress() {
    this.refs.nav.push({
        title: 'Favorites',
        component: UsersShow
    })
  }
  onLeftButtonPress() {
    this.refs.nav.push({
      title: 'Map',
      component: ShelterMap
    })
  }
  render() {
    return (
      <NavigatorIOS
          ref="nav"
          style={styles.container}
          initialRoute={{
            component: Login,
            title: 'Next Best Friend',
          }}
          tintColor="black"
          barTintColor="white"
          titleTextColor="black"
          translucent={true}
      />
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000000'
  },
})
