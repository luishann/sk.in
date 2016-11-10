import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity,
  TouchableNativeFeedback} from 'react-native';

const dummyData =  {
  '1': {brand: 'Cerave', name: 'Foaming Facial Cleanser'},
  '2': {brand: 'Clinique', name: 'Dramatically Different Moisturizing Gel'},
  '3': {brand: "Paula's Choice", name: 'Skin Perfecting 2% BHA Liquid Exfoliant'}
};

var ProductsList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  render: function() {
    return (
      <View style={{flex: 1, paddingTop: 0, backgroundColor:'#f2f2f2'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}

        />
      </View>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (let prop in dummyData) {
      dataBlob.push(dummyData[prop]);
    }
    return dataBlob;
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <TouchableNativeFeedback onPress={() => {
      this.props.changeRoute(6);
      highlightRow(sectionID, rowID);}}
      background={TouchableNativeFeedback.Ripple('#000000')}>
        <View style={styles.row}>
          <Text style={styles.name}>{rowData.name}</Text>
          <Text style={styles.brand}>{rowData.brand}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  },




});

export default class Products extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ProductsList changeRoute={this.props.changeRoute}/>

        {/* Add Product Button */}
        <TouchableOpacity onPress={this.props.changeRoute.bind(this, 5)}
        style={styles.touchableButton}>
          <Image source={require('./icons/ic_add_yellow.png')}/>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  row: {
    padding: 10,
    paddingRight: 15,
    backgroundColor: '#FFF',
    marginTop: 4,
    marginBottom: 7,
    marginLeft: 9,
    marginRight: 9,
  //  flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5
  },
  entry: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  brand: {
    fontSize: 14,
    flex: 1,
    flexWrap:'wrap',
    color: '#222'
  },
  name: {
    fontSize: 16,
    flex: 1,
    flexWrap:'wrap',
    color: '#222'
  },
  touchableButton: {
    bottom: 10,
    right: 10,
    width: 48,
    height: 48,
    position: 'absolute',
  }
});
