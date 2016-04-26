import React from 'react-native';

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  MapView
} = React;

var SHELTER_INFO = 'http://localhost:3000/shelters.json';
var ZIP_CODE = 'http://localhost:3000/shelters/zip_code.json';
import RNGeocoder from 'react-native-geocoder';

export default class ShelterMap extends Component {
   constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        longitude: 0,
        latitude: 0,
        // latitudeDelta: 0.0922,
        // longitudeDelta: 0.0421,
      },
      mapRegionInput: undefined,
      annotations: [],
      isFirstLoad: true,
    };
  }
  componentDidMount() {
    this.fetchData()
    navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position)
      var longit = parseFloat(JSON.stringify(position["coords"]["longitude"]));
      var lat = parseFloat(JSON.stringify(position["coords"]["latitude"]));
      console.log(longit)
      console.log(lat)
      this.setState({mapRegion: {longitude: longit, latitude: lat}});
      },
      (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
  sendUserLocation(location){
    var obj = {
      method: 'GET',
      body: JSON.stringify({location})
    }
    fetch(ZIP_CODE, obj)
     .then((response) => response.json())
     .done();
  }
  fetchData() {
    fetch(SHELTER_INFO)
      .then((response) => response.json())
      .then((responseData) => {
        parsed = responseData.map(function(item){
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
        annotations: this.state.shelterInfo,
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
 })
