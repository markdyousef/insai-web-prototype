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
    isLoading: false,
    errorMessage: null
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
        case 'SET_CHANNEL_AREA':
        return {
            ...state,
            areaName: action.areaName
        }
        case 'SET_CHANNEL_NUMBER':
        return {
            ...state,
            channelNumber: action.channelNumber
        }
        case 'UPDATE_CHANNEL':
        return {
            ...state,
            isLoading: true
        }
        case 'UPDATE_CHANNEL_SUCCESS':
        return {
            ...state,
            isLoading: false,
            displayDetail: false
        }
        case 'UPDATE_CHANNEL_FAILURE':
        return {
            ...state,
            isLoading: false,
            errorMessage: action.message
        }
        default:
        return state; 
    }
}

export default channel;