import React, { Component, PropTypes } from 'react'
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
                <View>
                    <Button
                        onPress={this.props.onGoBack}
                        title="Go Back"
                        color="#841584"
                        accessibilityLabel="Go Back"
                    />
                </View>
            </View>
        )
    }
}

HNStoryDetails.propTypes = {
    onGoBack: PropTypes.func
}

HNStoryDetails.defaultProps = {
    onGoBack: () => {}
}

export default HNStoryDetails
