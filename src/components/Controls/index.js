import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {getBoardInfo, startBoardStream, stopBoardStream} from '../../socket';
import {connect} from 'react-redux';

class Controls extends Component {
    constructor() {
        super();
        getBoardInfo((err, info) => this.setState({
            info
        }));
    }
    render() {
        const {dispatch} = this.props;   
        return (
            <div>
                <RaisedButton
                    label="Stop"
                    onClick={stopBoardStream}
                />
                <RaisedButton
                    label="Start"
                    primary
                    onClick={() => dispatch(startBoardStream())}
                />
            </div>
        );
    }
}

export default connect()(Controls);
