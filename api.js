module.exports = api = {
  getUserPhoto(){
  fetch(PHOTO_API)
    .then((response) => response.json())
    .done();
  },
  getUserInfo(){
  fetch(INFO_API)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        info : {
          name : responseData.name,
          email: responseData.email,
        },
      });
    })
    .done();
  }
