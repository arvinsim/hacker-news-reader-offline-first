import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  View
} from 'react-native';

import store from './config/store.js';

import HomeContainer from  './routes/Home/index.js';

export default class HackerNewsReaderOfflineFirst extends Component {
  render() {
    return (
      <Provider store={store}> 
        <HomeContainer />
      </Provider>
    );
  }
}
