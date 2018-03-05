import io from 'socket.io-client';
import {addChannelData} from './actions'
const socket = io('http://localhost:5000');

function getBoardInfo(cb) {
    socket.on('BOARD_INFO', info => cb(null, info));
}

function startBoardStream() {
    return (dispatch) => {
        socket.emit('START_BOARD_STREAM');
        socket.on('START_BOARD_ERROR', err => console.log(err))
        socket.on('START_BOARD_SUCCESS', (res) => {
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
}

function stopBoardStream() {
    socket.emit('STOP_BOARD_STREAM');
    socket.on('STOP_BOARD_ERROR', err => console.log(err));
    socket.on('STOP_BOARD_SUCCESS', data => console.log(data));
}

export {
    getBoardInfo,
    startBoardStream,
    stopBoardStream
}