'use strict';

import React, { Component } from 'react';
import { BarChart, CombinedChart } from 'react-native-chart-android/index.android';
import { StyleSheet, View, Text, ListView } from 'react-native';


export default class EntryAnalytics extends Component {

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
    fetch("https://lit-gorge-31410.herokuapp.com/avg-rating?userID=1", {method: "GET"})
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
			<ListView
        dataSource={this.state.dataSource}
				renderRow={this.renderProduct.bind(this)}
				//style={styles.listView}
			/>
		);
	}

	renderProduct(entry) {
		return (


				<View>
					<Text>User: {entry.user}</Text>
					<Text>Month: {entry.month}</Text>
					<Text>Rating: {entry.rating}</Text>
				</View>
		)
	}
}

var styles = StyleSheet.create({
  text: {
    flex: 1,
    color: '#222'
  },
  date: {
    fontSize: 16,
    flex: 1,
    color: '#222'
  },
});
