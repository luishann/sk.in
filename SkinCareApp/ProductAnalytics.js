'use strict';

import React, { Component } from 'react';
import {LineChart, BarChart, CombinedChart } from 'react-native-chart-android/index.android';
import { StyleSheet, View, Text, ListView } from 'react-native';

export default class ProductAnalytics extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      isLoading: true,
				option: props.option,
				data: {
					xValues: [],
					yValues: [{data: [], label:'test1', config:{color: '#21beca'}}]
				}
	    };
  }

	componentDidMount() {
    	this.fetchData();
  	}

	fetchData() {
		var x_Values = [];
	 	var y_Values = [];
		var path="https://lit-gorge-31410.herokuapp.com/" + this.state.option;
		console.log(path);
	    fetch(path, {method: "GET"})
	    .then((response) => response.json())
	    .then((responseData) => {
				console.log(responseData);
				for (var i = 0; i < responseData.length; i++) {
					x_Values.push(responseData[i].brand.substring(0,4));
					y_Values.push(responseData[i].total_rating);
				}

	      this.setState({
	        data: {
						xValues: x_Values,
						yValues: [{data: y_Values, label:'', config:{color: '#FF6663'}}]
					},
	        isLoading: false,
	      });
	    })
	    .done();
  }

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}> 5 {this.state.option} </Text>
					<View style={styles.chartContainer}>
						<BarChart
								style={{flex:1}}
								data={this.state.data}
								yAxisRight={{enable:false}}
								yAxis={{startAtZero:false}}
								xAxis={{position:"BOTTOM"}}
								pinchZoom={true}
								/>
					</View>
				</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chartContainer: {
        width: 350,
        height: 500,
    },
		text: {
	    fontSize: 18,
	    color: '#222',
	  },
		axis: {
			fontSize: 12,
	    color: '#222',
		}

});
