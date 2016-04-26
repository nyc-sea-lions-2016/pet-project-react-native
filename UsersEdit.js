import Button from 'react-native-button';
import React from'react-native';

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  Slider,
  TouchableHighlight
} = React;

var USER_INFO = 'http://10.0.2.62:3000/users/1/edit.json';
var USER_UPDATE = 'http://10.0.2.62:3000/users/1.json'

export default class UsersEdit extends Component {
   constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
      this.fetchData();
  }
  fetchData() {
    fetch(USER_INFO)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        this.setState({
          userInfo: responseData,
          loaded: true,
          searchRadius: responseData.preferred_search_radius,
          text: responseData.preferred_location,
        });
      })
      .done();
  }
  goHome(){
    this.props.refreshPage()
  }
  componentWillUnmount(){
    this.addLocationToUser(this.state.text)
    this.addSearchRadiusToUser(this.state.searchRadius)
  }
  addLocationToUser(location){
    var obj = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({location})
    }
    fetch(USER_UPDATE, obj)
  }
  addSearchRadiusToUser(searchRadius) {
    var obj = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({searchRadius})
    }
    fetch(USER_UPDATE, obj)
  }
  render() {
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     var self = this;
     return (
       <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png'}}
            style={styles.thumbnail}/>
            <Text style={styles.username}>{self.state.userInfo.name}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.settingsDetails}>zip code</Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              keyboardType='number-pad'
            />
            <Text style={styles.settingsDetails}>search distance</Text>
            <Text>{this.state.searchRadius} miles</Text>
            <Slider
              onValueChange={(searchRadius) => self.setState({searchRadius: searchRadius})}
              minimumValue={10}
              maximumValue={3000}
              value={this.state.searchRadius}
              step={5}
              style={styles.slider}
            />
            <Text style={styles.settingsDetails}>preferences</Text>
            <View style={this.preferenceButtons}>
              <TouchableHighlight onPress={this._onPressButton}><Text>Cats</Text></TouchableHighlight>
            </View>
            <Button onPress={self.goHome.bind(self)}>
              <Image
                source={{uri: 'http://www.iconsdb.com/icons/preview/gray/home-5-xxl.png'}}
                style={styles.backButton}
                />
            </Button>
          </View>
       </View>
     );
   }
   renderLoadingView() {
     return (
       <View style={styles.favoritesContainer}>
         <Text>
           Loading your profile...
         </Text>
       </View>
     );
   }
 }

 var styles = StyleSheet.create({
   container: {
     justifyContent: 'center',
     alignItems: 'center',
     overflow: 'hidden'
   },
   slider: {
     width: 200,
     margin: 5
   },
   username: {
     marginTop: 10,
     fontSize: 30
   },
   backButton: {
    marginTop: 50,
    height: 50,
    width: 50
   },
   inputBox: {
     height: 40,
     borderWidth: 1,
     borderColor: 'gray',
     width: 100,
     marginLeft: 200,
     marginTop: 10,
     marginBottom: 10
   },
   topContainer: {
     height: 320,
     width: 500,
     backgroundColor: '#1abc9c',
     justifyContent: 'center',
     alignItems: 'center',
   },
   bottomContainer: {
     height: 500,
     width: 500,
     marginTop: 20,
     alignItems: 'center',
   },
   thumbnail: {
     width: 150,
     height: 150,
     marginTop: 80,
   },
   settingsDetails: {
     fontSize: 18,
   }
 })
