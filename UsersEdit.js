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
  goHome(){
    this.props.refreshPage()
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
            <Text style={styles.settingsDetails}>location</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              value={this.state.text}
              placeholder='location'
            />
            <Text style={styles.settingsDetails}>search distance</Text>
            <Slider></Slider>
            <Text style={styles.settingsDetails}>preferences</Text>
            <Image
              source={{uri: 'http://www.iconsdb.com/icons/preview/gray/home-5-xxl.png'}}
              style={styles.backButton}
              onPress={self.goHome}
            />
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
    marginTop: 100,
    height: 50,
    width: 50
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
