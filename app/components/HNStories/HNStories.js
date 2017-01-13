import React, { Component } from 'react';
import {
    View,
    Text,
    ListView
} from 'react-native';

import HNStory from '../HNStory/index.js'

class HNStories extends Component {
  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.stories);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) => <HNStory story={rowData}/>}
      />
    );
  }  
}

export default HNStories;