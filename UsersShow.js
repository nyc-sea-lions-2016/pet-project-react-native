var React = require('react-native');

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image
} = React;

var REQUEST_URL = 'http://localhost:3000/users/show.json';

class UsersShow extends Component {
   constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
  componentDidMount() {
      this.fetchData();
    }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }
  render() {
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderPet}
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
    renderPet(pet) {
      var photo = 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/rounded-glossy-black-icons-animals/016572-rounded-glossy-black-icon-animals-animal-cat-print.png'
      if (pet.photos.length > 0) {
        photo = pet.photos[0].url
      }
      return (
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
    borderRadius: 10
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
   borderRadius: 10
  },
  listView: {
   paddingTop: 70,
   backgroundColor: '#1abc9c',
  },
});

  module.exports = UsersShow;
