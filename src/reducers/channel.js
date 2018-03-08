const initialState = {
    channelNumber: 2,
    powerDown: false,
    gain: 24, //1,2,4,6,8,12, 24
    inputType: "normal",
    bias: true,
    srb2: true,
    srb1: false,
    areaName: 'Fp1',
    cableColor: 'BLACK',
    channelColor: 'PURPLE',
    channelName: 'DAISY_N2P',
    dataType: 'EEG',
    displayDetail: true,
    isLoading: false
}

const channel = (state=initialState, action) => {
    switch(action.type) {
        case 'OPEN_CHANNEL_DETAIL':
        return {
            ...state,
            displayDetail: true
        }
        default:
        return state; 
    }
}

export default channel;