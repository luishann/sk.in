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
			xValues:['Oct 29, 2016','Oct 30, 2016','Oct 31, 2016', 'Nov 1, 2016', 'Nov 2, 2016', 'Nov 3, 2016'],
			yValues:[
				{
					data:[1, 3, 2, 2, 3, 4],
					config:{
						color:'blue'
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
