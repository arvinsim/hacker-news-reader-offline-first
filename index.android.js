/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import HNStories from './app/components/HNStories/index.js'

export default class HackerNewsOfflineFirst extends Component {
  render() {
    return (
      <View>
        <HNStories />
      </View>
    );
  }
}

AppRegistry.registerComponent('hacker_news_offline_first', () => HackerNewsOfflineFirst);
