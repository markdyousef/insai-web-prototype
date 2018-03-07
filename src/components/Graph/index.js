import React from 'react';
import {connect} from 'react-redux';
import Graph from './Graph';

const mapStateToProps = state => {
    return {
        channelData: state.channelsData.toJS()
    }
}

const mapDispatchToProps = dispatch => {
    return {};
}


const GraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Graph)

export default GraphContainer