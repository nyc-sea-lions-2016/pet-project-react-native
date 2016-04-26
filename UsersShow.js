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

var REQUEST_URL = 'http://10.0.2.129:3000/users/show.json';
var DELETE_FAVORITE_URL = 'http://localhost:3000/pets/';

export default class UsersShow extends Component {
   constructor(props) {
    super(props);
    this.state = {
      emptyDataSource: new ListView.DataSource({
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
        this.setState({ favoritePets: responseData })
        this.setState({
          dataSource: this.state.emptyDataSource.cloneWithRows(responseData),
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
   deleteFavorite(petID){
     console.log("deleting favorite")
     var filteredPets = this.state.favoritePets.filter((pet) => pet.id != petID)
     console.log('filtered', filteredPets);
     var obj = {
       method: 'DELETE',
       body: JSON.stringify({petID})
     }
     fetch(DELETE_FAVORITE_URL + petID, obj)
       .then((response) =>{
        this.setState({favoritePets: filteredPets, dataSource: this.state.emptyDataSource.cloneWithRows(filteredPets)});
      });
   }
   renderPet(pet) {
      var photo = 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/rounded-glossy-black-icons-animals/016572-rounded-glossy-black-icon-animals-animal-cat-print.png'
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
            <TouchableHighlight onPress={self.deleteFavorite.bind(self,pet.id)}><Text style={styles.deleteFavorite}>x</Text></TouchableHighlight>
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
  deleteFavorite: {
    marginBottom: 70,
    marginRight: 5,
    fontSize: 22
  }
});
