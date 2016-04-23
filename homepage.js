var Button = require('react-native-button');
var React = require('react-native');
var UsersShow = require("./UsersShow");

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  TouchableHighlight,
} = React;

var REQUEST_URL = 'http://localhost:3000/index.json';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPet: null,
      loaded: false,
    }
  }
  onPress() {
    this.props.navigator.push({
        title: 'Favorites',
        component: UsersShow
    });
  onLikeButtonPress() {
  }
  onDislikeButtonPress() {
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
  onMoveShouldSetResponder(evt){ return true }
  onResponderMove(evt){ console.log(evt) }
  onResponderRelease(evt){ console.log(evt) }
  render() {
    if (!this.state.loaded){
      return this.renderLoadingView();
    }
    var self = this

    var image = this.state.currentPet.url
    return (
      <View style={styles.container}>
        <View
          style={styles.swipeArea}
          onMoveShouldSetResponder = {self.onMoveShouldSetResponder}
          onResponderMove = {self.onResponderMove}
          onResponderRelease = {self.onResponderRelease}
          >
            <Image
              style={styles.thumbnail}
              source={{uri: image}}
              />
          <Text style={styles.name}> {this.state.currentPet.name} </Text>
        </View>
        <View style={styles.likeDislikeButtons}>
          <Button>
            <Image
              style={styles.buttonImg} source={{uri: 'http://www.iconsdb.com/icons/preview/tropical-blue/x-mark-xxl.png'}}
            />
          </Button>
          <Button>
            <Image
              style={styles.buttonImg}
              source={{uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png'}}
            />
          </Button>
        </View>
        <View style={[styles.scene, {backgroundColor: '#DAF6FF'}]}>
          <TouchableHighlight onPress={this.onPress}>
              <Text>Favorites!!</Text>
          </TouchableHighlight>
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
  },
  buttonImg: {
    width: 50,
    height: 50,
    margin: 20,
  },
  likeDislikeButtons: {
    flexDirection: 'row'
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
  swipeArea: {
    backgroundColor: '#e3e3e3',
    padding: 7
  },
  name: {
    fontSize: 40,
  }
  });


module.exports = Homepage;
