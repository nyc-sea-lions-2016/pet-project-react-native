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
  TouchableHighlight,
  SegmentedControlIOS,
} = React;

var USER_INFO = 'http://localhost:3000/users/1/edit.json';
var USER_UPDATE = 'http://localhost:3000/users/1.json'
var ANIMALS =  ['cat', 'dog', 'reptile', 'smallfurry', 'horse']

export default class UsersEdit extends Component {
   constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      loaded: false,
      text: '',
      selectedIndex: 0
    };
  }
  componentDidMount() {
      this.fetchData();
  }
  fetchData() {
    fetch(USER_INFO)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          userInfo: responseData,
          loaded: true,
          text: responseData.preferred_location,
          selectedIndex: ANIMALS.indexOf(responseData.animal_preference)
        });
      })
      .done();
  }
  goHome(){
    this.props.refreshPage(ANIMALS[this.state.selectedIndex])
  }
  componentWillUnmount(){
    this.addLocationToUser(this.state.text)
    this.addAnimalPreferenceToUser(ANIMALS[this.state.selectedIndex])
  }
  addLocationToUser(location){
    var obj = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({location})
    }
    fetch(USER_UPDATE, obj)
  }
  addAnimalPreferenceToUser(animalPreference) {
    console.log(animalPreference)
    var obj = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({animalPreference})
    }
    fetch(USER_UPDATE, obj)
  }
  render() {
    console.log("rendering edit page")
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     var self = this;
     return (
       <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image
              source={require('../images/Cat-Avatar.png')}
              style={styles.thumbnail}
            />
            <Text style={styles.username}>{self.state.userInfo.name}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.settingsDetails}>Zip Code</Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              keyboardType='number-pad'
            />
            <Text style={styles.settingsDetails}>Pet Preference:</Text>
            <View style={this.preferenceButtons}>
              <SegmentedControlIOS
                values={ANIMALS}
                selectedIndex={this.state.selectedIndex}
                onChange={(event) => {
                  this.setState({
                    selectedIndex: event.nativeEvent.selectedSegmentIndex
                  })
                }}
                style={styles.segmentedControl}
              />
            </View>
            <Button onPress={self.goHome.bind(self)}>
              <Image
                source={require('../images/Home-Icon.png')}
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
   },
   segmentedControl: {
     width: 350,
     height: 30,
     marginTop: 10
   },
 })
