import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'

import HNHeader from '../../components/HNHeader/index.js'
import HNStories from '../../components/HNStories/index.js'

import styles from './styles.js'

class Home extends Component {
    componentDidMount() {
        this.props.onComponentDidMount()
    }

    render() {
        return (
            <View style={styles.home}>
                <View style={styles.header}>
                    <HNHeader />
                </View>
                <View style={styles.stories}>
                    <HNStories {...this.props} />
                </View>
            </View>
        );
    }
}

export default Home