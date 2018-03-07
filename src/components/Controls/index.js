import React, {Component} from 'react';
import {getBoardInfo, startBoardStream, stopBoardStream} from '../../socket';
import {connect} from 'react-redux';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton/IconButton';
import PlayIcon from 'material-ui/svg-icons/av/play-arrow';
import PauseIcon from 'material-ui/svg-icons/av/pause'

const Container = styled.nav`
    background: #fff;
    display: flex;
    justify-content: center;
`;

class Controls extends Component {
    constructor() {
        super();
        getBoardInfo((err, info) => this.setState({
            info
        }));
    }
    render() {
        const {dispatch} = this.props;   
        return (
            <Container>
                <IconButton touch>
                    <PlayIcon />
                </IconButton>
                <IconButton touch>
                    <PauseIcon />
                </IconButton>
            </Container>
        );
    }
}

export default connect()(Controls);
