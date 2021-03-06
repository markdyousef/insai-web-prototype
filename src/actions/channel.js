import {socket} from '../config';
// Channel Configuration (client)
export const setPower = (powerDown) => ({
    type: 'SET_CHANNEL_POWER',
    powerDown
});

export const setGain = (gain) => ({
    type: 'SET_CHANNEL_GAIN',
    gain
});

export const setBias = (bias) => ({
    type: 'SET_CHANNEL_BIAS',
    bias
});

export const setSrb = (srb1, srb2) => ({
    type: 'SET_CHANNEL_SRB',
    srb1,
    srb2
});

export const setInput = (inputType) => ({
    type: 'SET_CHANNEL_INPUT',
    inputType
});

export const setAreaName = (areaName) => ({
    type: 'SET_CHANNEL_AREA',
    areaName
});

export const setChannelNumber = (channelNumber) => ({
    type: 'SET_CHANNEL_NUMBER',
    channelNumber
});

// Display
export const displayChannelDetail = (displayDetail) => ({
    type: 'DISPLAY_CHANNEL_DETAIL',
    displayDetail
});

// Board Channel Updates
export const update = () => ({
    type: 'UPDATE_CHANNEL'
});

export const updateSuccess = () => ({
    type: 'UPDATE_CHANNEL_SUCCESS'
});

export const updateFailure = (message) => ({
    type: 'UPDATE_CHANNEL_FAILURE',
    message
});

// Async Actions
export const updateChannelConfig = (channel) => dispatch => {
    const channelConfig = {
        channelNumber: channel.channelNumber,
        powerDown: channel.powerDown,
        gain: channel.gain,
        inputType: channel.inputType,
        bias: channel.bias,
        srb2: channel.srb2,
        srb1: channel.srb1
    }
    socket.emit('UPDATE_CHANNEL', channelConfig)
    dispatch(update())

    socket.on('UPDATE_CHANNEL_ERROR', err => dispatch(updateFailure(err)))
    socket.on('UPDATE_CHANNEL_SUCCESS', res => {
        console.log(res);
        // TODO: write update to storage
        dispatch(updateSuccess())
    })
}
