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
			xValues:['Sept','Oct','Nov'],
			yValues:[
				{
					data:[0,2,4],
					label:'Tea Tree Face Wash',
					config:{
						color:'red'
					}
				},
				{
					data:[2,3,4],
					label:'Clean N Clear',
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
					<LineChart
						style={{flex:1}}
						data={this.getBarData()}
						visibleYRange={[0,5]}
						drawGridBackground={false}
						yAxisRight={{enable:false}}
						yAxis={{startAtZero:false,drawGridLines:false}}
						xAxis={{drawGridLines:false,position:"BOTTOM"}}
					/>
				</View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container:{
		flex:1,
		margin: 10,
		padding: 10
	},
	chartContainer:{
		flex:1,
		margin: 5
	},
	chart:{
		flex:1,
	}
});


module.exports = Component;
