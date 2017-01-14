import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'

import styles from './styles.js'


class HNStory extends Component {
  render() {
    const timeAgo = moment(this.props.story.time, 'X').fromNow()
    return (
      <TouchableHighlight onPress={()=>{}}>
        <View style={styles.container}>
          <View>
            <Text style={styles.athing}>
              <Text style={styles.athingTitel}>{this.props.story.title}</Text>
              <Text style={styles.athingUrl}>({this.props.story.url})</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.subtext}>{this.props.story.score} points by {this.props.story.by} {timeAgo} | { this.props.story.descendants } comments</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default HNStory