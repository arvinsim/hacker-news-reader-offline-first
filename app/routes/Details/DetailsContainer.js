import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import Details from './Details.js'

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);
