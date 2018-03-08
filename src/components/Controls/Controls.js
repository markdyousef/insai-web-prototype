import React, {Component} from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton/IconButton';
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import PauseIcon from 'material-ui/svg-icons/av/pause'
import Paper from 'material-ui/Paper';

const Container = styled.nav`
    padding: 5px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Controls extends Component {
    render() {
        return (
            <Paper zDepth={2} style={{margin: 5}}>
                <Container>
                    <RaisedButton
                        label="Connect"
                        primary
                    />
                    <IconButton touch>
                        <PlayIcon />
                    </IconButton>
                    <IconButton touch>
                        <PauseIcon />
                    </IconButton>
                </Container>
            </Paper>
        );
    }
}

export default Controls;