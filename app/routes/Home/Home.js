import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'

import HNHeader from '../../components/HNHeader/index.js'
import HNStories from '../../components/HNStories/index.js'

import styles from './styles.js'

class Home extends Component {
    render() {
        return (
            <View style={styles.home}>
                <HNHeader />
                <HNStories {...this.props} />
            </View>
        );
    }
}

export default Home