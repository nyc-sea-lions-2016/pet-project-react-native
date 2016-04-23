var Button = require('react-native-button');
var Swiper = require('react-native-swiper');
var React = require('react-native');

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
} = React;

var FAKE_PET = {
  id: null,
  petfinder_id: 33476469,
  name: "Spunky",
  animal: "Dog",
  age: "Young",
  altered: true,
  breed: "Shepherd",
  description: "Spunky is one of five from the same place.  They were removed from this home by animal control due to gross negligence; the case went to court and the dogs were ordered returned to the owner.  Periodic checks by animal control revealed they still seldom had adequate food and water and so they were again impounded and this time the court severed the owners rights to the dogs.  Spunky lives up to his name, loving, outgoing and eager to please.  He has always been with other dogs and mixes well with them.  He absolutely loves being talked to and petted, always ready to give more affection than he gets. For any family wanting a nice all around medium-large  dog, Spunky would make a very good choice.↵Born about 2/12/14",
  gender: "M",
  shots: true,
  size: "M",
  special_needs: "",
  url: "http://photos.petfinder.com/photos/pets/33476469/1/?bust=1444350952&width=60&-pnt.jpg"}

class PetShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPet: FAKE_PET,
    }
  }
  _handleDislike() {
    console.log(this)
    this.setState({
      detailsClicked: false
    })
  }
  _handleBack(){
    console.log(this.props)
    this.props.refreshPage()
  }

  onLikeButtonPress() {

  }

  render() {
    var image = this.state.currentPet.url;
    var self = this;
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.pictures}>
          <View style={styles.slide1}>
            <Image
              style={styles.thumbnail}
              source={{uri: image}}
            />
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Second image</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Third Image</Text>
          </View>
        </View>

        <View style={styles.likeDislikeButtons}>
          <Button onPress={self._handleBack.bind(self)}>
            <Image
              style={styles.buttonImg} source={{uri: 'http://www.iconsdb.com/icons/preview/tropical-blue/x-mark-xxl.png'}}
            />
          </Button>
          <Button onPress={self.onLikeButtonPress.bind(self)}>
            <Image
              style={styles.buttonImg}
              source={{uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png'}}
            />
          </Button>
        </View>
        <View style={styles.backButton}>
          <Button
            style={{borderWidth: 1, borderColor: 'blue'}}
            onPress={this._handleBack.bind(self)}>
            Back
          </Button>
        </View>


        <ScrollView
          style={styles.details}
          showsVerticalScrollIndicator true>
          <Text>name: {this.state.currentPet.name}</Text>
          <Text>animal: {this.state.currentPet.animal}</Text>
          <Text>age: {this.state.currentPet.age}</Text>
          <Text>altered: {this.state.currentPet.altered}</Text>
          <Text>animal: {this.state.currentPet.animal}</Text>
          <Text>breed: {this.state.currentPet.breed}</Text>
          <Text>gender: {this.state.currentPet.gender}</Text>
          <Text>shots: {this.state.currentPet.shots}</Text>
          <Text>size: {this.state.currentPet.size}</Text>
          <Text>notes: {this.state.currentPet.special_needs}</Text>
          <Text>description: {this.state.currentPet.description}</Text>
        </ScrollView>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pictures: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonImg: {
    width: 50,
    height: 50,
    margin: 20,
  },
  likeDislikeButtons: {
    flexDirection: 'row'
  },
  backButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 25,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  details: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  thumbnail: {
    width: 350,
    height: 350,
  }
})

module.exports = PetShow;
