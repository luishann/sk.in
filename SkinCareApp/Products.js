import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Image, TouchableOpacity,
  TouchableNativeFeedback} from 'react-native';


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
    fetch("https://lit-gorge-31410.herokuapp.com/products", {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
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
      <TouchableNativeFeedback onPress={() => this.props.changeRoute(6, product, product.id)}
      background={TouchableNativeFeedback.Ripple('#000000')}>
        <View style={styles.row}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          
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
        <ProductList changeRoute={this.props.changeRoute}/>

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
