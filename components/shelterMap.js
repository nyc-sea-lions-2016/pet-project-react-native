'use strict';

import React from 'react-native';
import RNGeocoder from 'react-native-geocoder';
// import UIExplorerBlock from './UIExplorerBlock';

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  MapView,
  Linking,
  TouchableNativeFeedback,
} = React;

var SHELTER_INFO = 'https://nextbestfriend.herokuapp.com/shelters.json';
var ZIP_CODE = 'https://nextbestfriend.herokuapp.com/shelters/zip_code.json';

export default class ShelterMap extends Component {
   constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        longitude: 0,
        latitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      mapRegionInput: undefined,
      annotations: [],
      isFirstLoad: true,
      loaded: false,
    };
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    fetch(SHELTER_INFO)
      .then((response) => response.json())
      .then((responseData) => {
        var parsed = responseData.map(function(item){
          return {title: item.title,
                  longitude: Number.parseFloat(item.longitude),
                  latitude: Number.parseFloat(item.latitude) }
        })
        this.setState({
          shelterInfo: parsed,
          loaded: true,
        });
      })
      .done();
  }
  handleClick() {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }
  _getAnnotations(region) {
    return(this.state.shelterInfo)
  }

  _onRegionChange(region) {
    this.setState({
      mapRegionInput: region,
    });
  }

  _onRegionChangeComplete(region) {
    if (this.state.isFirstLoad) {
      this.setState({
        mapRegionInput: region,
        annotations: this._getAnnotations(region),
        isFirstLoad: false,
      });
    }
  }
  _onRegionInputChanged(region){
    this.setState({
      mapRegion: region,
      mapRegionInput: region,
      annotations: this._getAnnotations(region)
    })
  }
  render() {
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     var self = this;
     return (
       <View style={styles.container}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            followUserLocation={true}
            onRegionChange={self._onRegionChange.bind(self)}
            onRegionChangeComplete={self._onRegionChangeComplete.bind(self)}
            region={this.state.region}
            annotations={this.state.shelterInfo}
          />
       </View>
     );
   }
   renderLoadingView() {
     return (
       <View style={styles.container}>
         <Text>
           Loading shelters...
         </Text>
       </View>
     );
   }
 }

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      width: 500,
      height: 800
    },
      button: {
      padding: 10,
      backgroundColor: '#3B5998',
      marginBottom: 10,
    },
      text: {
      color: 'white',
    },
  })
