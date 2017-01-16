import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home.js'
import { fetchData } from '../../actions/index.js'

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
            dispatch(fetchData())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
