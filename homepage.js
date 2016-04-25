var Button = require('react-native-button');
var React = require('react-native');
var UsersShow = require("./UsersShow");
var PetShow = require('./PetShow');
var UsersEdit = require('./UsersEdit')

import SwipeCards from 'react-native-swipe-cards';

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
var FAVORITE_URL = 'http://localhost:3000/pets.json';
var PET_URL = 'http://localhost:3000/pets/1.json';

class Card extends Component {
  render() {
<<<<<<< HEAD

=======
>>>>>>> master
    return(
      <View
        style={styles.swipeArea}
        >
          <Image
            style={styles.thumbnail}
            source={{uri: this.props.photos[0].url}}
            />
          <Text style={styles.name}> {this.props.name} </Text>
      </View>
    )
  }
}

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPet: null,
      loaded: false,
      detailsClicked: false,
      pets: []
    }
  }
  onLikeButtonPress() {
    this.addFavorite(this.state.currentPet);
  onLikeButtonPress(pet) {
    this.addFavorite(pet);
  }
  addFavorite(pet){
    var obj = {
      method: 'POST',
      body: JSON.stringify({pet})
    }
    fetch(FAVORITE_URL, obj)
      .then((response) => this.fetchData())
      .done();
  }
  showSettings(){
    this.setState({settingsClicked: true})
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          currentPet: responseData[0],
          loaded: true,
          detailsClicked: false,
          pets: responseData
        });
      })
      .done();
  }
  showDetails(){
    this.setState({detailsClicked: true})
  }
  refreshPage(){
    console.log("refreshing page")
    this.setState({detailsClicked: false, settingsClicked: false})
  }
  refreshPageWithNewAnimal(){
    this.fetchData()
  }
  render() {
    var self = this;
    if (!this.state.loaded){
      return this.renderLoadingView();
    }else if (this.state.detailsClicked) {
      var pet = this.state.currentPet;
      return (
        <PetShow  refreshPage={self.refreshPage.bind(self)}
                  refreshPageWithNewAnimal={self.refreshPageWithNewAnimal.bind(self)}
                  onLikeButtonPress={self.onLikeButtonPress.bind(self)}
                  clickedPet={pet}
                  favorited={false}
        />
      )
    } else if (this.state.settingsClicked){
      return (
        <UsersEdit refreshPage={self.refreshPage.bind(self)}/>
      )
    }

    var cardData = self.state.pets
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={cardData}
          renderCard={(cardData) => <Card {...cardData}/>}
          showYup={true}
          showNope={true}
          handleYup={self.onLikeButtonPress.bind(self)}
          handleNope={self.fetchData.bind(self)}
        />
        <View style={styles.likeDislikeButtons}>
          <Button onPress={self.fetchData.bind(self)}>
            <Image
              style={styles.buttonImg} source={{uri: 'http://www.iconsdb.com/icons/preview/tropical-blue/x-mark-xxl.png'}}
            />
          </Button>
          <Button
            onPress={this.showDetails.bind(this)}>
            <Image
              style={styles.buttonImg}
              source={{uri: 'http://www.iconsdb.com/icons/preview/gray/info-2-xxl.png'}}
            />
          </Button>
          <Button onPress={self.onLikeButtonPress.bind(self)}>
            <Image
              style={styles.buttonImg}
              source={{uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png'}}
            />
          </Button>
        </View>
        <View style={styles.detailsButton}>
          <Button onPress={this.showSettings.bind(this)}>
            <Image
              style={styles.infoButtonImg}
              source={{uri: 'https://cdn3.iconfinder.com/data/icons/fez/512/FEZ-04-128.png'}}
              />
          </Button>
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
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    elevation: 1,
  },
  container: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImg: {
    width: 50,
    height: 50,
    margin: 20,
  },
  infoButtonImg: {
    width: 50,
    height: 50,
  },
  likeDislikeButtons: {
    flexDirection: 'row'
  },
  detailsButton: {
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    backgroundColor: '#bdc3c7',
    padding: 7,
  },
  name: {
    fontSize: 40,
  }
  });


module.exports = Homepage;
