import React from 'react-native';
import RNGeocoder from 'react-native-geocoder';

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

var SHELTER_INFO = 'http://10.0.2.129:3000/shelters.json';
var ZIP_CODE = 'http://10.0.2.129:3000/shelters/zip_code.json';

export default class ShelterMap extends Component {
   constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        longitude: 0,
        latitude: 0,
        maxDelta: 0.0922,
        minDelta: 0.0421,
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
  // sendUserLocation(location){
  //   var obj = {
  //     method: 'POST',
  //     body: JSON.stringify({location})
  //   }
  //   fetch(ZIP_CODE, obj)
  //    .then((response) => response.json())
  //    .done();
  // }
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
 })
