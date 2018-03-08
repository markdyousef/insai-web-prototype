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

export const disconnectBoard = () => ({
    type: 'DISCONNECT_BOARD'
});

// Board State
export const startStream = () => ({
    type: 'START_BOARD_STREAM'
});

export const stopStream = () => ({
    type: 'STOP_BOARD_STREAM'
});

export const pauseStream = () => ({
    type: 'PAUSE_BOARD_STREAM'
})