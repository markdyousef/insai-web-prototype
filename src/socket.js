import io from 'socket.io-client';
const socket = io('http://localhost:5000');

function getBoardInfo(cb) {
    socket.on('BOARD_INFO', info => cb(null, info));
}

function startBoardStream(cb) {
    socket.emit('START_BOARD_STREAM');
    socket.on('START_BOARD_ERROR', err => cb(err, null))
    socket.on('START_BOARD_SUCCESS', data => cb(null, data));
}

function stopBoardStream(cb) {
    socket.emit('STOP_BOARD_STREAM');
    socket.on('STOP_BOARD_ERROR', err => cb(err, null));
    socket.on('STOP_BOARD_SUCCESS', data => cb(null, data));
}

export {
    getBoardInfo,
    startBoardStream,
    stopBoardStream
}