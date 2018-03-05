import {List} from 'immutable';

const initialState = {
    channelsData: List([])
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_CHANNELS_DATA':
        const {channels, timestamp} = action;
        return {
            ...state,
            channelsData: state.channelsData.push({channels, timestamp})
        }
        default:
        return state
    }
}

export default reducer