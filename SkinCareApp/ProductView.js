import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableOpacity, ScrollView, TextInput,
TouchableWithoutFeedback, DatePickerAndroid} from 'react-native';

export default class ProductView extends Component {




   constructor(props) {
    super(props);
    this.state = {
      productID: props.productID,
      name: null,
      brand: null,
      description: null,
      data: null,
      isLoading: true,
      date: null,
      simpleText: dateString
    };
    this.change = props.changeRoute;
  }

    componentDidMount() {
      console.log("This is the productID" + this.state.productID); //productID succesfully transferred
    this._randFunc();
    console.log("done the request"); //executes asynchronously ofc
  }

    _randFunc(data) {
    console.log("starting get request");
    //prodID
    fetch("https://lit-gorge-31410.herokuapp.com/products?prodid=" + this.state.productID, {method: "GET"})
    .then((response) => response.json())
    /*
      {//console.log("GEETING HERE parse")
        response.json();
        console.log(response.json());} )*/
    .then((responseData) => {

      var newDate = new Date(Date.parse(responseData[0].startdate.slice(0, 19).replace(' ', 'T')));
      dateString = newDate.toLocaleDateString();
      this.setState(
        {
        data: responseData[0],
        id: responseData[0].id,
        name: responseData[0].name,
        date: responseData[0].startdate,
        brand: responseData[0].brand,
        isLoading: false,
        simpleText: dateString
      });
      console.log(this.state.description);
    })
    .done();
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





_onPressButton(){
    console.log("ticged");

    var newDate;
    if ( this.state.simpleDate != null) {
      newDate = this.state.simpleDate.toISOString().slice(0, 19).replace('T', ' ');
    } else {
      newDate = this.state.date;
    }

    //f (this.state.photo == null) {
      prod = JSON.stringify({userID: 1, entryID: this.props.entryID, entryDescription: this.state.description,
        date: newDate,
        rating: this.state.rating, photoLocation: this.state.dbphoto});
  /*  } else {
      prod = JSON.stringify({userID: 1, entryID: this.props.entryID, entryDescription: this.state.description,
        date: newDate,
        rating: this.state.rating, photoLocation: this.state.photo});
    }*/

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

  //--this.props.changeRoute.bind(this,1);
  //_navigator.pop();

}



  render() {
    var expiryString;
    if (this.props.product.expirydate == null) {
      expiryString = 'none';
    } else {
      //var newDate = new Date(Date.parse(this.props.product.expirydate.slice(0, 19).replace(' ', 'T')));
      //expiryString = newDate.toUTCString().slice(0, 16);
    }
    return (

      <ScrollView style={styles.container}>
       <TouchableWithoutFeedback
        onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
        <View>
          <Text style={styles.label}>Entry Date:</Text>
          <Text style={styles.dateButton}>{this.state.simpleText}</Text>
        </View>
      </TouchableWithoutFeedback>
      
      <Text style={styles.name}>Name:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            defaultValue  = {this.state.name}
            onChangeText={(name) => this.setState({name})}
          />

      <Text style={styles.brand}>Brand:</Text>
      <TextInput style={styles.input}
        underlineColorAndroid={"transparent"}
        defaultValue = {this.state.brand}
        onChangeText={(brand) => this.setState({brand})}
      />

      <View style={styles.container}>


        <View style={styles.buttons}>

          <TouchableOpacity onPress={this._onPressButton.bind(this)}>
            <Text style={styles.button}>Modify Product</Text>
          </TouchableOpacity>
          
          {/* Back button this.props.changeRoute.bind(this,2); the following is faster */}
          <TouchableOpacity onPress={()=>{_navigator.pop();}}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>
        

        
          </View>
        {/*
        <TouchableOpacity style={{flex: 1}}
          onPress={this.props.changeRoute.bind(this,2)}>
          <Text style={styles.ret}>Return to Products </Text>
        </TouchableOpacity>*/}

      </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
    padding: 20,
  },
  brand: {
    fontSize: 22,
    color: '#222',
  },
  name: {
    fontSize: 19,
    color: '#222',
    marginBottom: 10
  },
  text: {
    color: '#555'
  },
  ret: {
    bottom: 15,
    position: 'absolute'
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
   buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 5
  },
  pad: {
    paddingTop: 25
  },
    dateButton: {
    color: '#222',
    fontSize: 15,
    backgroundColor: '#d8f5d1',
    borderRadius: 5,
    padding: 5
  },
  label: {
    color: '#222',
    fontSize: 15,
  }

});
