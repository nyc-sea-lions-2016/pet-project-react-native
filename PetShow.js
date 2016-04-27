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
  _handleBack(){
    this.props.refreshPage()
  }
  render() {
    var currentPet = this.props.clickedPet
    var self = this;
    var image = ''
      if (this.props.clickedPet.url) {
          image = this.props.clickedPet.url
      } else {
          image = this.props.clickedPet.photos[0].url
      };
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
      return (
        <View style={styles.container}>
          <View style={styles.pictures}>
            <Swiper>
                {images}
            </Swiper>
          </View>
          <View style={styles.likeDislikeButtons}>
            <Button onPress={() => Communications.phonecall(`${currentPet.contact_phone}`, true)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/phone-icon.png')}
              />
            </Button>
            <Button onPress={() => Communications.email([`${currentPet.contact_email}`],null,null,`Inquiry about ${currentPet.name}`,`Hi, I found ${currentPet.name} on the app NextBestFriend, and I was hoping I could get some more information about the adoption process. Thanks so much!`)}>
              <Image
                style={styles.buttonImg}
                source={require('./images/email-icon.png')}
              />
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
                <Text style={styles.detailName}>Shots: </Text>
                <Text style={styles.detailContent}>{this.props.clickedPet.shots}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Size: </Text><Text style={styles.detailContent}>{this.props.clickedPet.size}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Notes: </Text><Text style={styles.detailContent}>{this.props.clickedPet.special_needs}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>About: </Text>
                <Text style={styles.detailContent}>{this.props.clickedPet.description}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Email: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_email}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Phone: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_phone}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Address: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_address}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>City: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_city}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>State: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_state}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailName}>Zip Code: </Text><Text style={styles.detailContent}>{this.props.clickedPet.contact_zip}</Text>
              </View>
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
    backgroundColor: '#1abc9c',
  },
  pictures: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  buttonImg: {
    width: 50,
    height: 50,
    margin: 10
  },
  likeDislikeButtons: {
    marginTop: 78,
    flexDirection: 'row',
  },
  backButton: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 25,
  },
  name: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 22,
  },
  description: {
    fontSize: 14,
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
    backgroundColor: '#1abc9c',
    paddingHorizontal: 7,
  },
  detailRow: {
    alignItems: 'stretch',
    backgroundColor:'#16a085',
    marginBottom: 2,
  },
  detailName: {
    flex: 1,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    paddingVertical: 7,
    color: 'white',
    fontSize: 14,
    width: 70,

  },
  detailContent: {
    flex: 1,
    color: 'white',
    marginLeft: 75,
    marginTop: -25
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
