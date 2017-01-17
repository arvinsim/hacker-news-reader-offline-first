import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    ListView
} from 'react-native';

import HNStory from '../HNStory/index.js'

import styles from './styles.js'

class HNStories extends Component {
  _renderRow(rowData, sectionId, rowId) {
    const storyOnPress = this.props.story.onPress
    const storyRowId = parseInt(rowId, 10) + 1

    return (
      <HNStory story={rowData} onPress={storyOnPress} rowId={storyRowId} />
    )
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.stories);
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={this._renderRow.bind(this)} 
        enableEmptySections={true} />
    );
  }  
}

HNStories.propTypes = {
  stories: PropTypes.array.isRequired,
  story: PropTypes.shape({
    onPress: PropTypes.func.isRequired
  }).isRequired
}

export default HNStories;