import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
  PixelRatio, TouchableOpacity, Image, ScrollView,
  Platform, TouchableWithoutFeedback,
  DatePickerAndroid, Slider, Dimensions, Picker } from 'react-native';
import UploadPhoto from './UploadPhoto';
import YellowButton from './YellowButton';

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
      products: null,
      language: null,
      options: [],
      value: null
    };
    this.change = props.changeRoute;
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

    fetch('http://lit-gorge-31410.herokuapp.com/user-products?userid=1', {
      method: "GET"}).then((response) => response.json())
                     .then((responseData) => {
                       for (item in responseData) {
                         var newArray = this.state.options;
                         newArray.push({value: responseData[item].id, label: responseData[item].name});
                         this.setState({options: newArray});
                       }
                       console.log(this.state.options);
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

  render() {

    return (
      <ScrollView style={styles.container}>

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

        {/* Dummy products data */}
        <View style={styles.pad}>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
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
  }
});
