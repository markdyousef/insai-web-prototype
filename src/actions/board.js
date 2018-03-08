import {socket} from '../config';
import {addChannelData} from './biostream';

// Board Connection
export const connect = () => ({
    type: 'CONNECT_BOARD'
});

export const connectFailure = (message) => ({
    type: 'CONNECT_BOARD_FAILURE',
    message: message
});

export const connectSuccess = () => ({
    type: 'CONNECT_BOARD_SUCCESS'
});

export const disconnect = () => ({
    type: 'DISCONNECT_BOARD'
});

// Board State
export const startStream = () => ({
    type: 'START_BOARD_STREAM'
});

export const stopStream = () => ({
    type: 'STOP_BOARD_STREAM'
});

// Async Actions
export const connectBoard = () => dispatch => {
    socket.emit('CONNECT_BOARD', {})
    dispatch(connect())
    socket.on('CONNECT_BOARD_SUCCESS',
        () => dispatch(connectSuccess()))
    socket.on('CONNECT_BOARD_FAILURE',
        (err) => dispatch(connectFailure(err)))
}

export const startBoardStream = () => dispatch => {
    socket.emit('START_BOARD_STREAM')
    dispatch(startStream())

    socket.emit('START_BOARD_STREAM');
    socket.on('BOARD_STREAM_ERROR', err => console.log(err))
    socket.on('BOARD_STREAM_SUCCESS', () => {})
    socket.on('BOARD_STREAM_DATA', (res) => {
        const data = JSON.parse(res);
        if (!data.channelData) return
        const {channelData, timestamp} = data;
        const channels = channelData.map((val, idx) => (
            {
                "channelNumber": idx,
                "value": val
            }
        ));
        dispatch(addChannelData({channels, timestamp}))
    });
}

export const stopBoardStream = () => dispatch => {
    dispatch(stopStream())
    socket.emit('STOP_BOARD_STREAM');
    socket.on('STOP_BOARD_ERROR', err => console.log(err));
    socket.on('STOP_BOARD_SUCCESS', data => console.log(data));
}

export const disconnectBoard = () => {

}