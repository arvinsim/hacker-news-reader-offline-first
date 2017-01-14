import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    ListView
} from 'react-native';

import HNStory from '../HNStory/index.js'

import styles from './styles.js'

class HNStories extends Component {
  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.stories);
    const storyOnPress = this.props.story.onPress
    console.log(this.props)
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={(rowData) => {
          return (
            <HNStory story={rowData} onPress={storyOnPress}/>)
        }}
      />
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