import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  View
} from 'react-native';

import store from './config/store.js';

import HomeContainer from './routes/Home/index.js';
import DetailsContainer from './routes/Details/index.js';

class HackerNewsReaderOfflineFirst extends Component {
  render() {
    return (
      <Provider store={store}> 
        <DetailsContainer />
      </Provider>
    );
  }
}

export default HackerNewsReaderOfflineFirst
