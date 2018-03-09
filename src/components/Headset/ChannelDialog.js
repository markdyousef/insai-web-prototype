import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const Container = styled.div`
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

const GAINS = [1,2,4,6,8,12,24];
const ChannelDialog = ({open, handleClose, channelConfig}) => {
    return (
        <Dialog
            title="Channel Details"
            open={open}
            actions={[
                <FlatButton
                    label="Cancel"
                    primary
                    onClick={handleClose}
                />,
                <FlatButton
                    label="Save"
                    primary
                    onClick={handleClose}
                />
            ]}
        >
        <Container>
            <h5>Description</h5>
            <Row>
                <TextField
                    floatingLabelText="Area"
                    value={channelConfig.areaName}
                    style={{width: 100}}
                />
                <TextField
                    floatingLabelText="Nr."
                    value={channelConfig.channelNumber}
                    style={{width: 40}}
                    type="number"
                />
            </Row>
            <h5>Settings</h5> 
            <Row>
                <Toggle
                    label="Power"
                    toggled={!channelConfig.powerDown}
                    style={{width: 150}}
                />
                <span>
                    <CheckBox
                        label="Bias"
                        checked={channelConfig.bias}
                        style={{width: 50}}
                    />
                    <CheckBox
                        label="SRB1"
                        checked={channelConfig.srb1}
                        style={{width: 50}}
                    />
                    <CheckBox
                        label="SRB2"
                        checked={channelConfig.srb2}
                        style={{width: 50}}
                    />
                </span>
                <DropDownMenu value={channelConfig.gain}>
                    {GAINS.map((value) => 
                        <MenuItem
                            key={'gain'+value}
                            value={value}
                            primaryText={value}
                        />
                    )}
                </DropDownMenu>
            </Row>
        </Container>
        </Dialog>
    );
}

export default ChannelDialog;