import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity,
  TouchableNativeFeedback} from 'react-native';

const dummyData =  {
  '1': {brand: 'Cerave', name: 'Foaming Facial Cleanser', expiryDate: '11/22/17',
    startDate: '11/01/16'},
  '2': {brand: 'Clinique', name: 'Dramatically Different Moisturizing Gel',
    expiryDate: '05/04/17', startDate:'11/01/16'},
  '3': {brand: "Paula's Choice", name: 'Skin Perfecting 2% BHA Liquid Exfoliant',
    expiryDate: '01/19/18', startDate:'11/01/16'}
};

/* ListView that uses const dummy data. See below for ProductList component
class that uses http rquests to populate a ListView!!!!*/
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

  _genRows: function(): Array<string> {
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
      this.props.changeRoute(6, rowData);
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

/* Populate listview using http requests, currently using Google books API.
Need to replace fetch URL and JSON keys when our own API is done! */
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction", {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.items),
        isLoading: false
      });
    })
    .done();
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderProduct.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderProduct(product) {
    return (
      <TouchableNativeFeedback onPress={() => this.props.changeRoute(6, product)}
      background={TouchableNativeFeedback.Ripple('#000000')}>
        <View style={styles.row}>
          <Text style={styles.name}>{product.volumeInfo.title}</Text>
          <Text style={styles.brand}>{product.volumeInfo.authors}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <Text>Loading products...</Text>
      </View>
    );
  }
}

export default class Products extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ProductsList changeRoute={this.props.changeRoute}/>
        {/*}<ProductList changeRoute={this.props.changeRoute}/>*/}

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
  },
  listView: {
   backgroundColor: '#f2f2f2'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
