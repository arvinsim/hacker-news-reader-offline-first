import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    ListView,
    RefreshControl
} from 'react-native';

import HNStory from '../HNStory/index.js'
import styles from './styles.js'

class HNStories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }

    _renderRow(rowData, sectionId, rowId) {
        const storyOnPress = this.props.story.onPress
        const storyRowId = parseInt(rowId, 10) + 1

        return (
            <HNStory story={rowData} onPress={storyOnPress} rowId={storyRowId} />
        )
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.props.fetchListItems().then(() => {
            this.setState({refreshing: false});
        });
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(this.props.stories);
        console.log('this.props.isRefreshing: ' + this.props.isRefreshing)
        return (
            <ListView
                style={styles.container}
                dataSource={dataSource}
                enableEmptySections={true}
                renderRow={this._renderRow.bind(this)}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    tintColor="#FFFFFF"
                    title="Loading..."
                    titleColor="#FFFFFF"
                    colors={['#FFFFFF']}
                  />
                }
            />
        );
    }
}

HNStories.propTypes = {
    stories: PropTypes.array.isRequired,
    story: PropTypes.shape({
        onPress: PropTypes.func.isRequired
    }).isRequired,
    fetchListItems: PropTypes.func
}

export default HNStories;