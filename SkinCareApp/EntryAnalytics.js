'use strict';

import React, { Component } from 'react';
import { LineChart, BarChart, CombinedChart } from 'react-native-chart-android/index.android';
import { StyleSheet, View, Text, ListView } from 'react-native';

export default class EntryAnalytics extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      isLoading: true,
				year: props.year,
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
		var x_Values = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	 	var y_Values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	  fetch("https://lit-gorge-31410.herokuapp.com/avg-rating?userID=1&year=" + "\'" + this.state.year + "\'", {method: "GET"})
	    .then((response) => response.json())
	    .then((responseData) => {
				console.log(responseData);
				for (var i = 0; i < responseData.length; i++) {
					for (var j = 0; j < x_Values.length; j++) {
						if (responseData[i].month === x_Values[j]) {
							y_Values[j] = responseData[i].rating;
						}
					}
				}
	      this.setState({
					data: {
						xValues: x_Values,
						yValues: [{data: y_Values, label:'My Progress', config:{color: '#21beca'}}]
					},
	        isLoading: false,
	      });
	    })
	    .done();
  }

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>My Progress For {this.state.year} </Text>
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
