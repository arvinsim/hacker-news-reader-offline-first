import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'

import HNHeader from '../../components/HNNavbar/index.js'
import HNStories from '../../components/HNStories/index.js'

import styles from './styles.js'

class Home extends Component {
    render() {
        return (
            <View style={styles.home}>
                <HNHeader />
                <HNStories stories={this.props.stories} />
            </View>
        );
    }
}

export default Home