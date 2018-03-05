import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {getBoardInfo, startBoardStream, stopBoardStream} from '../../socket';

export default class extends Component {
    constructor() {
        super();
        getBoardInfo((err, info) => this.setState({
            info
        }));
    }
    startStream = () => {
        startBoardStream((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data)
        })
    }
    stopStream = () => {
        stopBoardStream((err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data)
        })
    }
    render() {
        return (
            <div>
                <RaisedButton
                    label="Stop"
                    onClick={this.stopStream}
                />
                <RaisedButton
                    label="Start"
                    primary
                    onClick={this.startStream}
                />
            </div>
        );
    }
}
