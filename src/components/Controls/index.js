import {connect} from 'react-redux'
import Controls from './Controls';

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls)

export default ControlsContainer;