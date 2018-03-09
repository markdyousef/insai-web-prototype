
// Channel Configuration
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

export const displayChannelDetail = (displayDetail) => ({
    type: 'DISPLAY_CHANNEL_DETAIL',
    displayDetail
})
