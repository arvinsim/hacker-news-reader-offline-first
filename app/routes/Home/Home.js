import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import HNStories from '../../components/HNStories/index.js';

class Home extends Component {
    render() {
        return (
            <View>
                <Text>Hacker News</Text>
                <HNStories stories={this.props.stories} />
            </View>
        );
    }
}

export default Home;