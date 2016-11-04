import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

export default class Journal extends Component {
  // Initialize hardcoded data for now
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Oct 31, 2016', 'Nov 1, 2016', 'Nov 2, 2016', 'Nov 3, 2016'
      ])
    };
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}
