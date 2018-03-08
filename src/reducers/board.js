const initialState = {
    connected: false,
    start: false,
    pause: false,
    isLoading: false,
    errorMessage: null
}

const board = (state=initialState, action) => {
    switch (action.type) {
        case 'CONNECT_BOARD':
        return {
            ...state,
            isLoading: true,
            errorMessage: null,
            connected: false
        }
        case 'CONNECT_BOARD_FAILURE':
        return {
            ...state,
            isLoading: false,
            errorMessage: action.message,
            connected: false
        }
        case 'CONNECT_BOARD_SUCCESS':
        return {
            ...state,
            isLoading: false,
            errorMessage: null,
            connected: true
        }
        // TODO: implement
        case 'DISCONNECT_BOARD':
        return {
            ...state,
            connected: false
        }
        case 'START_BOARD_STREAM':
            return {
                ...state,
                start: true
            }
        case 'STOP_BOARD_STREAM':
        return {
            ...state,
            start: false
        }
        case 'PAUSE_BOARD_STREAM':
        return {
            ...state,
            pause: !state.pause
        }
        default:
        return state;
    }
};

export default board;