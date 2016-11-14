import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BarChart from 'react-native-chart';

  const data = [
      ['Oct 29, 2016', 1],
      ['Oct 30, 2016', 3],
      ['Oct 31, 2016', 2],
      ['Nov 1, 2016', 2],
      ['Nov 2, 2016', 3],
      ['Nov 3, 2016', 4]
  ];

  export default class Analytics extends Component {
      render() {
          return (
              <View style={styles.container}>
                  <BarChart
                      style={styles.chart}
                      data={data}
                      yValues = {[1, 2, 3, 4, 5]}
                      type="bar"
                   />
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
      chart: {
          width: 300,
          height: 200,
      },
  });
