import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  View
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation
} from '@exponent/ex-navigation'

import store from './config/store.js'
import router from './config/router.js'

class HackerNewsReaderOfflineFirst extends Component {
  render() {
    return (
      <Provider store={store}> 
        <NavigationProvider router={router}>
          <StackNavigation initialRoute={router.getRoute('home')} />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default HackerNewsReaderOfflineFirst
