import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
  PixelRatio, TouchableOpacity, Image, ScrollView, TouchableHighlight,
  Platform, TouchableWithoutFeedback,
  DatePickerAndroid, Slider, Dimensions, Picker, Modal } from 'react-native';
import UploadPhoto from './UploadPhoto';
import YellowButton from './YellowButton';
import MultipleChoice from 'react-native-multiple-choice'

const dummyData = [];

class SliderExample extends React.Component {
  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render() {
    return (
      <View>
        <Text style={styles.ratingStyle}>
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

export default class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presetDate: new Date(2020, 4, 5),
      allDate: new Date(2020, 4, 5),
      simpleText: 'Pick a Date!',
      minText: 'pick a date, no earlier than today',
      maxText: 'pick a date, no later than today',
      presetText: 'pick a date, preset to 2020/5/5',
      allText: 'pick a date between 2020/5/1 and 2020/5/10',
      description: '',
      rating: 0,
      avatarSource: null,
      photo: this.props.photo,
      photoData: '',
      products: [],
      language: null,
      options: [],
      optionsNames: [],
      optionsRatings: 0,
      value: null,
      modalVisible: false
    };
    this.change = props.changeRoute;
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressButton() {
    prod = JSON.stringify({userID: 1, entryDescription: this.state.description,
      date: this.state.simpleDate.toISOString().slice(0, 19).replace('T', ' '),
      rating: this.state.rating, photo: this.state.photoData});
    fetch('https://lit-gorge-31410.herokuapp.com/entry', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: prod
    }).catch(function(error) {
      console.log("Error sending entry to server: " + error);
    });

    this.change(1);
  }

  getProducts() {
    console.log("got to getProducts");

    fetch('http://lit-gorge-31410.herokuapp.com/user-products?userID=1', {
      method: "GET"}).then((response) => response.json())
                     .then((responseData) => {
                       for (item in responseData) {
                         var newArray2 = this.state.optionsNames;
                         newArray2.push(responseData[item].id + ", " + responseData[item].name);
                         this.setState({optionsNames : newArray2});
                       }
                       console.log(this.state.options);
                       console.log(this.state.optionsNames);
                     })
                     .done();
  }

  componentDidMount() {
    this.getProducts();
  }

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  _setPhotoData(data) {
    this.setState({photoData: data});
    console.log("Had set photo data to be: " + this.state.photoData);
  }

  logChange(val) {
    console.log("Selected: " + val);
  }

  setRatings(val, item) {
    var array = item.split(",");
    var newArray = this.state.options;
    var flag = false;
    for (var i = 0; i < newArray.length; i++) {
      if (newArray[i].productID == array[0]) {
        flag = true;
        newArray[i].rating = val;
      }
    }
    if (!flag) {
      newArray.push({productID: array[0], rating: val});
    }
    this.setState({options: newArray});
  }

  setProducts(option) {
    console.log(option);
    var array = this.state.products;
    var productArray = option.split(",");
    var i = array.indexOf(productArray[0]);
    if (i == -1) {
      array.push(productArray[0]);
    } else {
      array.splice(i, 1);
    }
    this.setState({products: array});
  }

  render() {

    return (

      <ScrollView style={styles.container}>

        <View>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
           <ScrollView style={styles.container}>

              <View>
                <TouchableHighlight onPress={() => {
                 this.setModalVisible(!this.state.modalVisible)
                }}>
                 <Text>Hide Modal</Text>
                </TouchableHighlight>

                <View>
                {
                  this.state.optionsNames.map(function(item, index){
                    return (
                      <View style={styles.ratingsPad}>
                        <Text style={styles.label}>{item} Rating</Text>
                        <SliderExample
                          {...this.props}
                          onSlidingComplete={(value) => this.setRatings(value, item)}
                          minimumValue={0}
                          maximumValue={5}
                          step={0.5}/>
                      </View>
                    )
                  }.bind(this))
                }
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>

        {/* Date picker */}
        <TouchableWithoutFeedback
          onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
          <View>
            <Text style={styles.label}>Entry Date:</Text>
            <Text style={styles.dateButton}>{this.state.simpleText}</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* Rating slider */}
        <View style={styles.pad}>
          <Text style={styles.label}>Daily Rating</Text>
          <SliderExample
            {...this.props}
            onSlidingComplete={(value) => this.setState({
                rating: value,
            })}
            minimumValue={0}
            maximumValue={5}
            step={0.5}/>
        </View>

        {/* Description */}
        <View style={styles.pad}>
          <Text style={styles.label}>Description:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            onChangeText={(description) => this.setState({description})}
          />
        </View>

        {/* Products data */}
        <View style={styles.pad}>
          <MultipleChoice
            options={this.state.optionsNames}
            selectedOptions={[]}
            maxSelectedOptions={this.state.optionsNames.size}
            onSelection={(option)=> this.setProducts(option)}
          />
        </View>

        <View style={styles.buttons}>
          <TouchableHighlight onPress={() => {
            this.setModalVisible(true)
          }}>
            <Text style={styles.button}>Product Ratings</Text>
          </TouchableHighlight>
        </View>

        <UploadPhoto setPhotoData={this._setPhotoData.bind(this)} buttonLabel={'Add Photo'} />
        { this.state.photoData ?  <Image style={{flex:1, height:300, width:300, resizeMode: 'contain'}}
            source={{uri: this.state.photoData}}/> : null }
        <View style={styles.buttons}>
          {/* Submit button */}
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text style={styles.button}>Add Entry</Text>
          </TouchableOpacity>

          {/* Back button */}
          <YellowButton onPressFunction={this.change.bind(this, 1)} buttonLabel={'Back'}/>

        </View>
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
    padding: 15
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 5
  },
  pad: {
    paddingTop: 25
  },
  label: {
    color: '#222',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#fad900',
    color: 'white',
    width: 108,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  dateButton: {
    color: '#222',
    fontSize: 15,
    backgroundColor: '#d8f5d1',
    borderRadius: 5,
    padding: 5
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  ratingStyle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  prodUsed: {
    paddingLeft: 20,
    fontSize:15,
    color: '#222',
    backgroundColor: '#d8f5d1'
  },
  ratingsPad: {
    paddingTop: 30,
    paddingBottom: 30
  }
});
