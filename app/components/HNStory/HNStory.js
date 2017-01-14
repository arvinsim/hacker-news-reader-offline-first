import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class HNStory extends Component {
  render() {
    return (
      <TouchableHighlight onPress={()=>{}}>
        <View>
          <Text>{this.props.story.title} {this.props.story.url}</Text>
          <Text>{this.props.story.score} points by {this.props.story.by} | { this.props.story.descendants } comments</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default HNStory;