'use strict';

import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity,
  TouchableNativeFeedback, RecyclerViewBackedScrollView, ScrollView} from 'react-native';

export default class Years extends Component {

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
    fetch("https://lit-gorge-31410.herokuapp.com/getEntryYears?userID="+ this.props.userID, {method: "GET"})
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
    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.text}>All Years</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderProduct.bind(this)}
            style={styles.listView}
          />
        </View>
      </ScrollView>
    );
	}

  renderProduct(entry) {
    return (
      <TouchableNativeFeedback onPress={() => this.props.changeRoute(8, entry.year)}
      background={TouchableNativeFeedback.Ripple('#000000')}>
        <View style={styles.row}>
          <View style={styles.entry}>
            <Text style={styles.text2}>{entry.year}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <Text>Loading years...</Text>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  row: {
    padding: 10,
    paddingRight: 15,
    backgroundColor: '#62d7df',
    marginTop: 6,
    marginBottom: 7,
    flexDirection: 'row',
    borderRadius: 5,
  },
  entry: {
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    paddingBottom: 30,
    textAlign: 'center'
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'white',
    textAlign: 'center'
  }
});
