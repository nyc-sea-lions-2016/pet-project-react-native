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

         <View style={styles.rightContainer}>
           <Text style={styles.name}>{pet.name}</Text>
           <Text style={styles.contact_name}>{pet.contact_name}</Text>
           <Text style={styles.contact_email}>{pet.contact_email}</Text>
           <Text style={styles.contact_phone}>{pet.contact_phone}</Text>
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
    },
    rightContainer: {
      flex: 1,
    },
    name: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    contact_name: {
      textAlign: 'center',
    },
    contact_email: {
      textAlign: 'center'
    },
    contact_phone: {
      textAlign: 'center'
    },
    listView: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
    },
  });

  module.exports = UsersShow;
