var Button = require('react-native-button');
var TableView = require('react-native-tableview-simple');
var React = require('react-native');

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  Slider
} = React;

var {
  Cell,
  Section,
  TableView,
} = TableView;

var USER_INFO = 'http://localhost:3000/users/1/edit.json';
var USER_UPDATE = 'http://localhost:3000/users/1.json'

class UsersEdit extends Component {
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
        this.setState({
          userInfo: responseData,
          loaded: true,
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
    console.log("adding location to user!")
    var obj = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({location})
    }
    fetch(USER_UPDATE, obj)
  }
  addSearchRadiusToUser(searchRadius) {
    console.log("adding search radius to user!")
    var obj = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({searchRadius})
    }
    fetch(USER_UPDATE, obj)
  }
  updateSlider(e){
    console.log(e)
    this.setState({searchRadius: ''})
    //set state to slider value
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
            <Slider
              minimumValue={10}
              maximumValue={3000}
              step={5}
              onSlidingComplete={this.updateSlider}
              style={styles.slider}
            />
            <Text style={styles.settingsDetails}>preferences</Text>
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
     height: 50,
     margin: 10
   },
   username: {
     marginTop: 10,
     fontSize: 30
   },
   backButton: {
    marginTop: 100,
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

module.exports = UsersEdit;
