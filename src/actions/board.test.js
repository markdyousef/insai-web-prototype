import board from '../reducers/board'
import * as action from './board';

const initialState = {
    connected: false,
    start: false,
    pause: false,
    isLoading: false,
    errorMessage: null
}

test('connects to board', () => {
    const newBoard = board(initialState, action.connect());
    expect(newBoard.isLoading).toBe(true);
    expect(newBoard.errorMessage).toBe(null);
    expect(newBoard.connected).toBe(false);
})

test('connect board failure message', () => {
    const message = 'Something went wrong!';
    const newBoard = board(initialState, action.connectFailure(message))
    const {isLoading, errorMessage, connected} = newBoard;
    expect(isLoading).toBe(false);
    expect(errorMessage).toBe(message);
    expect(connected).toBe(false);
})

test('connect board success', () => {
    const newBoard= board(initialState, action.connectSuccess())
    const {isLoading, errorMessage, connected} = newBoard;
    expect(isLoading).toBe(false)
    expect(errorMessage).toBe(null)
    expect(connected).toBe(true);
})

it('starts, pauses and then stops the board stream', () => {
    // start
    let state = board(initialState, action.startStream());
    expect(state.start).toBe(true)
    // pause
    state = board(state, action.pauseStream())
    expect(state.pause).toBe(true)
    // stop
    state = board(state, action.stopStream())
    expect(state.start).toBe(false)
})

test('disconnects board', () => {
    const connectedBoard = {
        connected: true,
    }
    const newBoard = board(connectedBoard, action.disconnectBoard())
    expect(newBoard.connected).not.toBe(true)
})