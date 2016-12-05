import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, TouchableOpacity, ScrollView, TextInput } from 'react-native';

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
      date: null
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
      //dateString = newDate.toLocaleDateString();
      this.setState(
        {
        data: responseData[0],
        id: responseData[0].id,
        name: responseData[0].name,
        date: responseData[0].startdate,
        brand: responseData[0].brand,
        isLoading: false
      });
      console.log(this.state.description);
    })
    .done();
  }





_onPressButton(){

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

      
      <Text style={styles.name}>Name:</Text>
          <TextInput style={styles.input}
            underlineColorAndroid={"transparent"}
            placeholder = {this.state.name}
            onChangeText={(name) => this.setState({name})}
          />

      <Text style={styles.brand}>Brand:</Text>
      <TextInput style={styles.input}
        underlineColorAndroid={"transparent"}
        placeholder = {this.state.brand}
        onChangeText={(brand) => this.setState({brand})}
      />

      <View style={styles.container}>
        <Text style={styles.brand}>{this.props.product.brand}</Text>
        <Text style={styles.name}>{this.props.product.name}</Text>
        <Text style={styles.text}>Expiry Date: {this.state.date}</Text>
        <Text> This is text I am adding</Text>

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
  }
});
