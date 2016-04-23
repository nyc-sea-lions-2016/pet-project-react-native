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
  render() {
    var image = this.state.currentPet.url
    return (
      <View style={styles.container}>
        <Swipe>
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
        </Swipe>

        <View>
          <Text>name: {currentPet.name}</Text>
          <Text>animal: {currentPet.animal}</Text>
          <Text>age: {currentPet.age}</Text>
          <Text>altered: {currentPet.altered}</Text>
          <Text>animal: {currentPet.animal}</Text>
          <Text>breed: {currentPet.breed}</Text>
          <Text>description: {currentPet.description}</Text>
          <Text>gender: {currentPet.gender}</Text>
          <Text>shots: {currentPet.shots}</Text>
          <Text>size: {currentPet.size}</Text>
          <Text>special_needs: {currentPet.special_needs}</Text>
        </View>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  wrapper: {
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
