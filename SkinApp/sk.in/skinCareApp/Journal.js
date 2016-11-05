import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image,
  TouchableNativeFeedback, RecyclerViewBackedScrollView} from 'react-native';

/* JSON object for journal entries data. This is just a hard coded example,
probably not the best way to format the JSON data (e.g. the id is the key here
but should it be the data instead, or should there be no key at all?).
People on the HTTP Requests Entry team should decide on a better format. */
const dummyData =  {
  '1': {date: 'Nov 4, 2016', issues: "acne", rating: '* * *'},
  '2': {date: 'Nov 3, 2016', issues: "acne", rating: '* * *'},
  '3': {date: 'Nov 2, 2016', issues: "acne", rating: '* * *'},
  '4': {date: 'Nov 1, 2016', issues: "acne, blackheads", rating: '* *'},
  '5': {date: 'Oct 31, 2016', issues: "acne, blackheads", rating: '* *'},
  '6': {date: 'Oct 30, 2016', issues: "acne, blackheads", rating: '* *'},
  '7': {date: 'Oct 29, 2016', issues: "acne, blackheads", rating: '* *'},
  '8': {date: 'Oct 28, 2016', issues: "acne, blackheads", rating: '* *'},
  '9': {date: 'Oct 27, 2016', issues: "acne, blackheads", rating: '* *'},
  '10': {date: 'Oct 26, 2016', issues: "acne, blackheads", rating: '* *'},
  '11': {date: 'Oct 25, 2016', issues: "acne, blackheads", rating: '* *'},
  '12': {date: 'Oct 24, 2016', issues: "acne, blackheads", rating: '* *'},
  '13': {date: 'Oct 23, 2016', issues: "acne, blackheads", rating: '* *'},
  '14': {date: 'Oct 22, 2016', issues: "acne, blackheads", rating: '* *'},
};

/* Code adapted from the React Native docs */
var JournalListView = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() { this._pressData = {}; },

  render: function() {
    return (
      <View style={{flex: 1, paddingTop: 0, backgroundColor:'#f2f2f2'}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderScrollComponent={props => <RecyclerViewBackedScrollView
            {...props} />}

        />
      </View>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (let prop in dummyData) {
      dataBlob.push(dummyData[prop]);
    }
    return dataBlob;
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number,
    highlightRow: (sectionID: number, rowID: number) => void) {
    //var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableNativeFeedback onPress={() => {
        this._pressRow(rowID);
        highlightRow(sectionID, rowID);}}
        background={TouchableNativeFeedback.Ripple('#000000')}>
        <View style={styles.row}>
          <View style={styles.entry}>
            <Text style={styles.date}>{rowData.date}</Text>
            <Text style={styles.text}>Rating</Text>
            <Text style={styles.text}>
              <Image source={require('./icons/ic_tag_small_red.png')} />  {rowData.issues}</Text>
          </View>
          <Image source={require('./icons/ic_photos4.png')} />
        </View>
      </TouchableNativeFeedback>
    );
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },

  _renderSeparator: function(sectionID: number, rowID: number,
    adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
           height: adjacentRowHighlighted ? 4 : 1,
           backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }
});

export default class Journal extends Component {
  render() {
    return (
      <View style={{flex: 1}}>

        <JournalListView />
        <Image source={require('./icons/ic_add_yellow.png')} style={styles.actionButton}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  row: {
    padding: 10,
    paddingRight: 15,
    //backgroundColor: '#F6F6F6',
    backgroundColor: '#FFF',
    marginTop: 4,
    marginBottom: 7,
    marginLeft: 9,
    marginRight: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //elevation: 2,
  },
  entry: {
    //flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 15,
    justifyContent: 'center',
  },
  text: {
    flex: 1,
  },
  date: {
    fontSize: 16,
    flex: 1,
  },
  actionButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
});
