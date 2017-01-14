import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from './styles.js'

import images from '../../config/images.js'

class HNHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.logoImage} source={images.logo} />
                </View>
                <View style={styles.main}>
                    <View style={styles.mainTitle}>
                        <Text style={styles.mainTitleText}>Hacker News</Text>
                    </View>
                    <View style={styles.mainSublinks}>
                        <Text style={styles.mainSublink}>new</Text>
                        <Text style={styles.mainSublink}>threads</Text>
                        <Text style={styles.mainSublink}>comments</Text>
                        <Text style={styles.mainSublink}>show</Text>
                        <Text style={styles.mainSublink}>ask</Text>
                        <Text style={styles.mainSublink}>jobs</Text>
                        <Text style={styles.mainSublink}>submit</Text>
                    </View>
                </View>
                <View style={styles.authentication}>
                    <Text>login</Text>
                </View>
            </View>
        )
    }
}

export default HNHeader