import React, {Component} from 'react';
import {connect} from 'react-redux';
import configJson from './board-config.json';
import Headset from './Headset';
import * as actions from '../../actions/channel';


const mapStateToProps = state => {
    return {
        channel: state.channel,
        ...configJson
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setPower: (powerDown) =>
            dispatch(actions.setPower(powerDown)),
        setGain: (gain) =>
            dispatch(actions.setGain(gain)),
        setBias: (bias) =>
            dispatch(actions.setBias(bias)),
        setSrb: (srb1=false, srb2=false) =>
            dispatch(actions.setSrb(srb1, srb2)),
        setInput: (inputType) =>
            dispatch(actions.setInput(inputType)),
        showDialog: (show) =>
            dispatch(actions.displayChannelDetail(show)),
        changeArea: (areaName) =>
            dispatch(actions.setAreaName(areaName)),
        changeChannel: (channelNumber) =>
            dispatch(actions.setChannelNumber(channelNumber)),
        saveConfig: (channel) =>
            dispatch(actions.updateChannelConfig(channel))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headset);