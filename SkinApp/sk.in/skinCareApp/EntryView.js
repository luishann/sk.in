import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,
  PixelRatio, TouchableOpacity, Image,
  Platform, TouchableWithoutFeedback,
  DatePickerAndroid, Slider, Dimensions } from 'react-native';

class SliderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

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

export default class EntryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryID: props.entryID,
      data: null,
      isLoading: true,
      simpleText: null,
      value: 0,
      rating: 0,
      description: null,
      dbphoto: null,
      photo: this.props.photo,
      date: null
    };
    this.change = props.changeRoute;
  }

  componentDidMount() {
    this._randFunc();
  }

  _randFunc(data) {
    fetch("https://lit-gorge-31410.herokuapp.com/entry?entryID=" + this.state.entryID, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      var newDate = new Date(Date.parse(responseData[0].date.slice(0, 19).replace(' ', 'T')));
      dateString = newDate.toLocaleDateString();

      this.setState({data: responseData[0],
        simpleText: dateString,
        date: responseData[0].date,
        value: responseData[0].rating,
        rating: responseData[0].rating,
        description: responseData[0].description,
        dbphoto: responseData[0].photoLocation,
        isLoading: false});
    })
    .done();
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <Text>Loading your entry...</Text>
      </View>
    );
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

  _onPressButton() {
    var newDate;
    if ( this.state.simpleDate != null) {
      newDate = this.state.simpleDate.toISOString().slice(0, 19).replace('T', ' ');
    } else {
      newDate = this.state.date;
    }

    if (this.state.photo == null) {
      prod = JSON.stringify({userID: 1, entryID: this.props.entryID, entryDescription: this.state.description,
        date: newDate,
        rating: this.state.rating, photoLocation: this.state.dbphoto});
    } else {
      prod = JSON.stringify({userID: 1, entryID: this.props.entryID, entryDescription: this.state.description,
        date: newDate,
        rating: this.state.rating, photoLocation: this.state.photo});
    }

    console.log(prod);

    fetch('https://lit-gorge-31410.herokuapp.com/edit-entry', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: prod
    });

    this.change(1);
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <View style={styles.container}>

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
            value={this.state.value}
            minimumValue={0}
            maximumValue={5}
            step={0.5}/>
        </View>

        {/* Description */}
        <View style={styles.pad}>
          <Text style={styles.label}>Description:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder = {this.state.description}
            onChangeText={(description) => this.setState({description})}
          />
        </View>

        {/* Choose Photo */}
        <View style={styles.pad}>
          <TouchableOpacity onPress={this.change.bind(this, 7, 'edit', this.props.entryID)}>
            <Text style={styles.button}>Pick A Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          {/* Submit button */}
          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text style={styles.button}>Modify Entry</Text>
          </TouchableOpacity>

          {/* Back button */}
          <TouchableOpacity onPress={this.change.bind(this, 1)}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
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
  }
});
