import Button from 'react-native-button';
import PetShow from './PetShow';
import React from 'react-native';

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  TouchableHighlight
} = React;

var REQUEST_URL = 'http://10.0.2.62:3000/users/show.json';

export default class UsersShow extends Component {
   constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      clickedPet: undefined
    };
  }
  componentDidMount() {
      this.fetchData();
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("the data:")
        console.log(responseData)
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
          clickedPet:undefined
        });
      })
      .done();
  }
  render() {
     var self = this

     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     else if (this.state.clickedPet != undefined) {
       return (
         <PetShow clickedPet={self.state.clickedPet} favorited={true}/>
       )
     }
     return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderPet.bind(self)}
          style={styles.listView}
         />
     );
   }
   renderLoadingView() {
     return (
       <View style={styles.favoritesContainer}>
         <Text>
           Loading favorite pets...
         </Text>
       </View>
     );
   }
   loadAnimalDetails(clickedPet){
     this.setState({clickedPet: clickedPet})
   }
    renderPet(pet) {
      var photo = require('./images/Cat-Print.png')
      if (pet.photos.length > 0) {
        photo = pet.photos[0].url
      }
      var self = this;
      return (
        <TouchableHighlight onPress={self.loadAnimalDetails.bind(self, pet)} >
          <View style={styles.favoritesContainer}>
            <Image
              source={{uri: photo}}
              style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
              <Text style={styles.name}>{pet.name}</Text>
              <Text style={styles.contact_city}>{pet.age} {pet.breed}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    }
 }
var styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    margin: 5,
  },
  rightContainer: {
    flex: 1,
  },
  name: {
   fontSize: 22,
   marginBottom: 8,
   textAlign: 'center',
  },
  contact_city: {
   textAlign: 'center',
   fontSize: 18,
  },
  thumbnail: {
   width: 120,
   height: 100,
  },
  listView: {
   paddingTop: 70,
   backgroundColor: '#1abc9c',
  },
});
