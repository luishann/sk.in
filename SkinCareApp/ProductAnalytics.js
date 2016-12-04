'use strict';

import React, { Component } from 'react';
import { BarChart, CombinedChart } from 'react-native-chart-android/index.android';
import { StyleSheet, View, Text, ListView } from 'react-native';

export default class ProductAnalytics extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      isLoading: true,
				data: {
					xValues: [],
					yValues: [{data: [], label:'test1', config:{color: 'blue'}}]
				}
	    };
  	}

	componentDidMount() {
    	this.fetchData();
  	}

	fetchData() {
		var x_Values = [];
	 	var y_Values = [];
	    fetch("https://lit-gorge-31410.herokuapp.com/max-product-all", {method: "GET"})
	    .then((response) => response.json())
	    .then((responseData) => {
				for (var i = 0; i < responseData.length; i++) {
					x_Values.push(responseData[i].month);
					y_Values.push(responseData[i].rating);
				}

	      this.setState({
	        data: {
						xValues: x_Values,
						yValues: [{data: y_Values, label:'test1', config:{color: 'blue'}}]
					},
	        isLoading: false,
	      });
	    })
	    .done();
  }

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.chartContainer}>
					<BarChart style={{flex:1}} data={this.state.data}/>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
  container:{
    flex:1
  },
  chartContainer:{
    flex:1
  },
  chart:{
    flex:1
  }
});
