'use strict';

var React = require('react');
var {
	BarChart,
	CombinedChart
}=require('react-native-chart-android/index.android');
var {
  StyleSheet,
  View,
  Text
} = require('react-native');

var Component = React.createClass({
	getBarData:function (argument) {
		var data={
			xValues:['1','2','3'],
			yValues:[
				{
					data:[4.0,5.0,6.0],
					label:'test1',
					config:{
						color:'blue'
					}
				},
				{
					data:[4.0,5.0,6.0],
					label:'test2',
					config:{
						color:'red'
					}
				},
				{
					data:[4.0,5.0,6.0],
					label:'test2',
					config:{
						color:'yellow'
					}
				}
			]
		};
		return data;
	},

	render: function() {
		return (
			<View style={styles.container}>
				<View style={styles.chartContainer}>
					<BarChart style={{flex:1}} data={this.getBarData()}/>
				</View>
			</View>
		);
	}
});

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


module.exports = Component;
