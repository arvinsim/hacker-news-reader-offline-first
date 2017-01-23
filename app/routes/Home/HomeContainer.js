import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import Home from './Home.js'
import {
    requestStories,
    navigateToHNStoryDetails
} from '../../actions/index.js'
import router from '../../config/router.js'

const mapStateToProps = (state) => {
    return {
        stories: state.general.stories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        story: {
            onPress: function() { 
                this.props.navigator.push(router.getRoute('details')) 
            }
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
