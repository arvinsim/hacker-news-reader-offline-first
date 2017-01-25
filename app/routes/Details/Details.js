import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'

import HNHeader from '../../components/HNHeader/index.js'
import HNStoryDetails from '../../components/HNStoryDetails/index.js'

import styles from './styles.js'

class Details extends Component {
    static route = {
        navigationBar: {
            title: 'Details',
            visible: false,
        }
    }

    render() {
        return (
            <View style={styles.details}>
                <View style={styles.header}>
                    <HNHeader />
                </View>
                <View style={styles.storyDetails}>
                    <HNStoryDetails {...this.props} />
                </View>
            </View>
        )
    }
}

export default Details
