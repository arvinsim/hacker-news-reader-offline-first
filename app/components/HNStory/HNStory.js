import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

class HNStory extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.story.title} {this.props.story.url}</Text>
        <Text>{this.props.story.score} points by {this.props.story.by} | { this.props.story.descendants } comments</Text>
      </View>
    );
  }
}

export default HNStory;