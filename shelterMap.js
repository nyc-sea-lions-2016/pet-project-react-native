var React = require('react-native');

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
var RNGeocoder = require('react-native-geocoder');

class ShelterMap extends Component {
   constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      mapRegion: {
        longitude: "",
        latitude: "",
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      initialPosition: "unknown",
      mapRegionInput: undefined,
      annotations: [],
      isFirstLoad: true,
    };
  }
  componentDidMount() {
    this.fetchData()
    navigator.geolocation.getCurrentPosition(
    (position) => {
      var longit = parseFloat(JSON.stringify(position["coords"]["longitude"]))
      var lat = parseFloat(JSON.stringify(position["coords"]["latitude"]))
      this.setState({mapRegion: {longitude: longit, latitude: lat}})
      var location = {
        latitude: lat,
        longitude: longit
      }
      RNGeocoder.reverseGeocodeLocation(location, (err, data) => {
        if (err) {
          return;
        }
        console.log(data);
      });
      // this.sendUserLocation(data)
    },
    (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  sendUserLocation(location){
    var obj = {
      method: 'get',
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
        this.setState({
          shelterInfo: responseData,
          loaded: true,
        });
      })
      .done();
  }
  _getAnnotations(region){
    return(this.state.shelterInfo)
  }
  _onRegionChange(region){
    this.setState({
      mapRegionInput: region,
    })
  }
  _onRegionChangeComplete(region){
    if(this.state.isFirstLoad){
      this.setState({
        mapRegionInput: region,
        annotations: this._getAnnotations(region),
        isFirstLoad: false
      })
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
            followUserLocation={false}
            onRegionChange={self._onRegionChange.bind(self)}
            onRegionChangeComplete={self._onRegionChangeComplete.bind(self)}
            region={this.state.mapRegion}
            annotations={this.state.annotations}
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
   }
 })

module.exports = ShelterMap;
