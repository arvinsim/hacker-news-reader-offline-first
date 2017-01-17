import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import Home from './Home.js'
import { requestStories } from '../../actions/index.js'

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        story: {
            onPress: () => Alert.alert(
                'Story was Clicked!',
                'You clicked on a Story item!'
            )
        },
        onComponentDidMount: () => {
            return dispatch(requestStories())
        },
        fetchListItems: () => {
            return dispatch(requestStories())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
