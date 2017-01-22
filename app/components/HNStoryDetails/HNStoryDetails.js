import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import styles from './styles.js'

class HNStoryDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Title</Text>
                </View>
                <View>
                    <Text style={styles.content}>Content</Text>
                </View>
            </View>
        )
    }
}

export default HNStoryDetails
