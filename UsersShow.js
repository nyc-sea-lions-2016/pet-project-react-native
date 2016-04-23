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
     console.log("state: " + this.state.dataSource)
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
      var photo = 'https://s-media-cache-ak0.pinimg.com/736x/c0/14/23/c014230dec32c2eeb133b7b8da072317.jpg'
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
            <Text style={styles.contact_city}>{pet.contact_city}</Text>
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
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderTopColor: 'pink',
    borderBottomColor: 'pink',
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
   width: 60,
  height: 90,
  },
  listView: {
   paddingTop: 20,
  //  backgroundColor: '#111111',
  },
});

  module.exports = UsersShow;
