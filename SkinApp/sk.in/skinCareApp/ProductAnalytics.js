'use strict';

var React = require('react');
var {
	LineChart,
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
			xValues:['Aug-2016','Sept-2016','Oct-2016','Nov-2016'],
			yValues:[
				{
					data:[0,2,4,5],
					label:'Time1',
					config:{
						color:'red'
					}
				},
				{
					data:[2,3,4,5],
					label:'Time2',
					config:{
						color:'yellow'
					}
				},
			]
		};
		return data;
	},
	render: function() {
		return (
			<View style={styles.container}>
				<View style={styles.chartContainer}>
					<LineChart style={{flex:1}} data={this.getBarData()}/>
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
