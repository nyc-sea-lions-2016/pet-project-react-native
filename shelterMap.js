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

export default class ShelterMap extends Component {
   constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      mapRegion: {
        latitude: 40.7230,
        longitude: -73.985130,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      mapRegionInput: undefined,
      annotations: [],
      isFirstLoad: true
    };
  }
  componentDidMount() {
      this.fetchData();
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
            followUserLocation={true}
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
