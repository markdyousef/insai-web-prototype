import {connect} from 'react-redux';
import Graph from './Graph';

const mapStateToProps = state => {
    return {
        // channelData: state.biostream.channelsData
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