import React, { Component } from 'react';
import {
    View,
    Text,
    ListView
} from 'react-native';

import HNStory from '../HNStory/index.js'

class HNStories extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);

    const story = {
      "by" : "dhouston",
      "descendants" : 71,
      "id" : 8863,
      "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
      "score" : 111,
      "time" : 1175714200,
      "title" : "My YC app: Dropbox - Throw away your USB drive",
      "type" : "story",
      "url" : "http://www.getdropbox.com/u/2/screencast.html"
    }
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        story,
        story,
        story,
        story,
        story,
        story,
        story,
      ])
    };
  }

  render() {
    return (
      <View>
        <Text>Hacker News</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <HNStory story={rowData}/>}
        />
      </View>
    );
  }  
}

export default HNStories;