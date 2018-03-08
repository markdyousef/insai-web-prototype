import {connect} from 'react-redux'
import Controls from './Controls';
import * as action from '../../actions/board';

const mapStateToProps = state => {
    return {
        ...state.board
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onConnect: () => {
            dispatch(action.connectBoard())
        },
        onDisconnect: () => {
            dispatch(action.disconnectBoard())
        },
        onStart: () => {
            dispatch(action.startBoardStream())
        },
        onStop: () => {
            dispatch(action.stopBoardStream())
        }
    }
}

const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls)

export default ControlsContainer;