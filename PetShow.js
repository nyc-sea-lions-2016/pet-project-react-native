import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
import React from 'react-native';
import Communications from 'react-native-communications';


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

export default class PetShow extends Component {
  _handleDislike() {
    this.props.refreshPageWithNewAnimal()
  }
  _handleBack(){
    this.props.refreshPage()
  }
  onLikeButtonPress() {
    this.props.onLikeButtonPress()
  }
  render() {
    var currentPet = this.props.clickedPet
    console.log(currentPet.photos)
    var image = ''
      if (this.props.clickedPet.url) {
          image = this.props.clickedPet.url
      } else {
          image = this.props.clickedPet.photos[0].url
      };
    var self = this;
    var images = currentPet.photos.map(function(photo, i){
      return (
        <View style={styles.slide}
                key={i}>
          <Image
            style={styles.thumbnail}
            source={{uri: photo.url}}
          />
        </View>
      )
    })

    if (!this.props.favorited){
      return (
        <View style={styles.container}>
          <View style={styles.pictures}>
            <Swiper>
                {images}
            </Swiper>
          </View>
          <View style={styles.likeDislikeButtons}>
            <Button onPress={self._handleDislike.bind(self)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/X-Mark.png')}
              />
            </Button>
            <Button onPress={self.onLikeButtonPress.bind(self)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/Heart.png')}
              />
            </Button>
            <Button onPress={() => Communications.email([`${currentPet.contact_email}`],null,null,`Inquiry about ${currentPet.name}`,`Hi, I found ${currentPet.name} on the app NextBestFriend, and I was hoping I could get some more information about the adoption process. Thanks so much!`)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/Mail-Icon.png')}
              />
            </Button>
            <Button onPress={() => Communications.phonecall(`${currentPet.contact_phone}`, true)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/Phone-Booth.png')}
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
              showsVerticalScrollIndicator true
            >
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Name: </Text><Text style={styles.detailContent}>{this.props.clickedPet.name}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Animal: </Text><Text style={styles.detailContent}>{this.props.clickedPet.animal}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Age: </Text><Text style={styles.detailContent}>{this.props.clickedPet.age}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Gender: </Text><Text style={styles.detailContent}>{this.props.clickedPet.gender}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Breed: </Text><Text style={styles.detailContent}>{this.props.clickedPet.breed}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Altered: </Text><Text style={styles.detailContent}>{this.props.clickedPet.altered}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Shots: </Text><Text style={styles.detailContent}>{this.props.clickedPet.shots}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Size: </Text><Text style={styles.detailContent}>{this.props.clickedPet.size}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Notes: </Text><Text style={styles.detailContent}>{this.props.clickedPet.special_needs}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Description: </Text><Text style={styles.detailContent}>{this.props.clickedPet.description}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Contact Email: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_email}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Contact Phone: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_phone}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Contact Address: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_address}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Contact City: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_city}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Contact State: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_state}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Contact Zip: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_zip}</Text>
              </View>
            </ScrollView>
        </View>
      );
    } else if (this.props.favorited) {
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
          </View>

          <View style={styles.likeDislikeButtons}>
            <Button onPress={self._handleDislike.bind(self)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/X-Mark.png')}
              />
            </Button>
            <Button onPress={self.onLikeButtonPress.bind(self)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/Heart.png')}
              />
            </Button>
            <Button>
              <Image
                style={styles.buttonImg}
                source={require('./images/Mail-Icon.png')}
              />
            </Button>
            <Button onPress={() => Communications.phonecall(`${currentPet.contact_phone}`, true)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/Phone-Booth.png')}
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
            showsVerticalScrollIndicator true
          >
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Name: </Text><Text style={styles.detailContent}>{this.props.clickedPet.name}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Animal: </Text><Text style={styles.detailContent}>{this.props.clickedPet.animal}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Age: </Text><Text style={styles.detailContent}>{this.props.clickedPet.age}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Gender: </Text><Text style={styles.detailContent}>{this.props.clickedPet.gender}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Breed: </Text><Text style={styles.detailContent}>{this.props.clickedPet.breed}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Altered: </Text><Text style={styles.detailContent}>{this.props.clickedPet.altered}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Shots: </Text><Text style={styles.detailContent}>{this.props.clickedPet.shots}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Size: </Text><Text style={styles.detailContent}>{this.props.clickedPet.size}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Notes: </Text><Text style={styles.detailContent}>{this.props.clickedPet.special_needs}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Description: </Text><Text style={styles.detailContent}>{this.props.clickedPet.description}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Contact Email: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_email}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Contact Phone: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_phone}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Contact Address: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_address}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Contact City: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_city}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Contact State: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_state}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailName}>Contact Zip: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_zip}</Text>
          </View>
          </ScrollView>
        </View>
      );
    }

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
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 7,
  },
  detailRow: {
    alignItems: 'stretch',
  },
  detailName: {
    flex: 1,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingVertical: 7,
  },
  detailContent: {
    flex: 1,
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
