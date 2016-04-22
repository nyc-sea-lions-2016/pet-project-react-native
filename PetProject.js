var Button = require('react-native-button');
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

var REQUEST_URL = 'http://localhost:3000/index.json';

class PetProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPet: null,
      loaded: false,
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        this.setState({
          currentPet: responseData,
          loaded: true,
        });
      })
      .done();
  }
  render() {
    if (!this.state.loaded){
      return this.renderLoadingView();
    }

    var image = this.state.currentPet.url
    return (
      <View style={styles.container}>
        <Text> {this.state.currentPet.name} </Text>
        <Image
          style={styles.thumbnail}
          source={{uri: image}}
        />
        <View>
          <Button>DISLIKE</Button>
          <Button>LIKE</Button>
        </View>
      </View>
    );
  }
  renderLoadingView(){
    return (
      <View>
        <Text>
          Loading pets...
        </Text>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thumbnail: {
    width: 350,
    height: 350,
  },
});

module.exports = PetProject;
