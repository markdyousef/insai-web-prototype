import React, {Component} from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton/IconButton';
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import PauseIcon from 'material-ui/svg-icons/av/pause'
import StopIcon from 'material-ui/svg-icons/av/stop';
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
                    {(this.props.connected) ?
                        <RaisedButton
                            label="Disconnect"
                            onClick={this.props.onDisconnect}
                        />
                        :
                        <RaisedButton
                            label="Connect"
                            primary
                            onClick={this.props.onConnect}
                        />
                    }
                    {(this.props.start) ? 
                        <IconButton
                            touch
                            onClick={this.props.onStop}
                        >
                            <PauseIcon />
                        </IconButton>
                        :
                        <IconButton
                            touch
                            onClick={this.props.onStart}
                        >
                            <PlayIcon />
                        </IconButton>
                    }
                </Container>
            </Paper>
        );
    }
}

export default Controls;