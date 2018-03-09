import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { CircularProgress } from 'material-ui';

const ConfigContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Row = styled.div`
    display: flex;
    padding-bottom: 10px;
    & div {
        margin-right: 10px;
    }
`;

const Config = (props) => {
    return(
        <ConfigContainer>
            <h5>Description</h5>
            <Row>
                <TextField
                    floatingLabelText="Area"
                    value={props.channel.areaName}
                    style={{width: 100}}
                    onChange={(event, value) => props.changeArea(value)}
                />
                <TextField
                    floatingLabelText="Nr."
                    value={props.channel.channelNumber}
                    style={{width: 40}}
                    type="number"
                    onChange={(event, value) => props.changeChannel(value)}
                />
            </Row>
            <h5>Settings</h5> 
            <Row>
                <Toggle
                    label="Power"
                    toggled={!props.channel.powerDown}
                    style={{width: 150}}
                    onToggle={(event, value) => props.setPower(!value)}
                />
                <span>
                    <CheckBox
                        label="Bias"
                        checked={props.channel.bias}
                        style={{width: 50}}
                        onCheck={(event, value) => props.setBias(value)}
                    />
                    <CheckBox
                        label="SRB1"
                        checked={props.channel.srb1}
                        style={{width: 50}}
                        onCheck={(event, value) => props.setSrb(value, props.channel.srb2)}
                    />
                    <CheckBox
                        label="SRB2"
                        checked={props.channel.srb2}
                        style={{width: 50}}
                        onCheck={(event, value) => props.setSrb(props.channel.srb1, value)}
                    />
                </span>
                <DropDownMenu
                    value={props.channel.gain}
                    onChange={(event, key, value) => props.setGain(value)}
                >
                    {GAINS.map((value) => 
                        <MenuItem
                            key={'gain'+value}
                            value={value}
                            primaryText={value}
                        />
                    )}
                </DropDownMenu>
            </Row>
        </ConfigContainer>
    );
}

const LoadingContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    z-index:999;
    opacity: 0.8;
`;
const Loading = () => {
    return (
        <LoadingContainer>
            <CircularProgress size={60}/>
        </LoadingContainer>
    );
}

const Container = styled.section`
    position: relative;
`;

const GAINS = [1,2,4,6,8,12,24];
const ChannelDialog = (props) => {
    return (
        <Dialog
            title="Channel Details"
            open={props.open}
            modal={false}
            onRequestClose={props.handleClose}
            actions={[
                <FlatButton
                    label="Cancel"
                    primary
                    onClick={props.handleClose}
                />,
                <FlatButton
                    label="Save"
                    primary
                    onClick={() => props.saveConfig(props.channel)}
                />
            ]}
        >
        <Container>
            {props.channel.isLoading&&<Loading />}
            <Config {...props} />
        </Container>
        </Dialog>
    );
}

export default ChannelDialog;