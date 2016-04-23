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

var REQUEST_URL = 'http://localhost:3000/users/1/edit.json';

class UsersEdit extends Component {
   constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
      this.fetchData();
    }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.pets),
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
      return (
        <View style={styles.favoritesContainer}>
          <Image
          source={{uri: pet.posters.thumbnail}}
          style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.name}>{pet.title}</Text>
            <Text style={styles.contact_city}>{pet.year}</Text>
          </View>
        </View>
      );
    }
 }
