'use strict';

import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity,
  TouchableNativeFeedback, RecyclerViewBackedScrollView, ScrollView} from 'react-native';


export default class Options extends Component{

    constructor(props){
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        isLoading: true,
        dataSource: ds.cloneWithRows(['Max Product Overall', 'Min Product Overall'])
      };
    }

    render() {
      return(
        <ScrollView style={{flex:1}}>
          <View style={styles.container}>
            <Text style={styles.text}>Product Analytics</Text>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderOption.bind(this)}
              style={styles.listView}
            />
          </View>
        </ScrollView>
      );
    }

    renderOption(entry) {
      return (
        <TouchableNativeFeedback onPress={() => this.props.changeRoute(9, entry.option)}
        background={TouchableNativeFeedback.Ripple('#000000')}>
          <View style={styles.row}>
            <View style={styles.entry}>
              <Text style={styles.text2}>{entry.option}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      );
    }

}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  row: {
    padding: 10,
    paddingRight: 15,
    backgroundColor: '#62d7df',
    marginTop: 6,
    marginBottom: 7,
    flexDirection: 'row',
    borderRadius: 5,
  },
  entry: {
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    paddingBottom: 30,
    textAlign: 'center'
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'white',
    textAlign: 'center'
  }
});
