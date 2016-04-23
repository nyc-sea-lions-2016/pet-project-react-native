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

var USER_INFO = 'http://localhost:3000/users/1/edit.json';

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
        console.log(responseData)
        this.setState({
          userInfo: responseData,
          loaded: true,
        });
      })
      .done();
  }
  render() {
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     var self = this;
     return (
       <View style={styles.container}>
        <Text>User Profile Page</Text>
        <Text>{self.state.userInfo.name}</Text>
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
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
 })

module.exports = UsersEdit;
