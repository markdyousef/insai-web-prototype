const initialState = {
    channelsData: []
};

const biostream = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_CHANNELS_DATA':
        const {channels, timestamp} = action;
        return {
            ...state,
            // last 100
            channelsData: state.channelsData.concat([{channels, timestamp}]).slice(-100)
        }
        default:
        return state
    }
}

export default biostream;