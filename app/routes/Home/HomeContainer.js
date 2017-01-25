import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import { NavigationActions } from '@exponent/ex-navigation'

import Home from './Home.js'
import { requestStories } from '../../actions/index.js'
import store from '../../config/store.js'
import router from '../../config/router.js'

const mapStateToProps = (state) => {
    return {
        stories: state.general.stories,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        story: {
            onPress: function(navigator, story) { 
                const data = { details: story }
                navigator.push(router.getRoute('details', data)) 
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
)(Home)
