'use strict';

import React, { Component } from 'react';
import { BarChart, CombinedChart } from 'react-native-chart-android/index.android';
import { StyleSheet, View, Text, ListView } from 'react-native';


export default class EntryAnalytics extends Component {

	constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
			x: null,
			y: null,
    };
  }

	componentDidMount() {
    this.fetchData();
  }

	fetchData() {
		var x_values = [];
		var y_values = [];
    fetch("https://lit-gorge-31410.herokuapp.com/avg-rating?userID=1", {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
			for (var i = 0; i < responseData.length; i++) {
				x_values.push(responseData[i].month);
				y_values.push(responseData[i].rating);
			}
      this.setState({
        x: x_values,
				y: y_values,
        isLoading: false
      });
    })
    .done();
  }

	render() {
		return (
			<View>
				<Text>X: {this.state.x}</Text>
				<Text>Y: {this.state.y}</Text>
			</View>
		);
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
