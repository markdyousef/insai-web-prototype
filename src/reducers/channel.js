import { ActionAccessibility } from "material-ui";

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
    displayDetail: false,
    isLoading: false
}

const channel = (state=initialState, action) => {
    switch(action.type) {
        case 'DISPLAY_CHANNEL_DETAIL':
        return {
            ...state,
            displayDetail: action.displayDetail
        }
        case 'SET_CHANNEL_POWER':
        return {
            ...state,
            powerDown: action.powerDown
        }
        case 'SET_CHANNEL_GAIN':
        return {
            ...state,
            gain: action.gain
        }
        case 'SET_CHANNEL_BIAS':
        return {
            ...state,
            bias: action.bias
        }
        case 'SET_CHANNEL_SRB':
        return {
            ...state,
            srb1: action.srb1,
            srb2: action.srb2
        }
        case 'SET_CHANNEL_INPUT':
        return {
            ...state,
            inputType: action.inputType
        }
        default:
        return state; 
    }
}

export default channel;