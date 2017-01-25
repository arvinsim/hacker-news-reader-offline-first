import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import { NavigationActions } from '@exponent/ex-navigation'

import Home from './Home.js'
import { requestStories, goToDetails } from '../../actions/index.js'

const mapStateToProps = (state) => {
    return {
        stories: state.general.stories,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        story: { onPress: goToDetails },
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
)(Home)
