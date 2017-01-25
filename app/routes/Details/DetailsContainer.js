import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import Details from './Details.js'
import { goToHome } from '../../actions/index.js'

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGoBack: goToHome
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);
