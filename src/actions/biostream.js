export const addChannelData = (data) => ({
    type: 'ADD_CHANNELS_DATA',
    channels: data.channels,
    timestamp: data.timestamp
});