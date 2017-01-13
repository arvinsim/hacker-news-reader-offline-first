import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home.js'

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
