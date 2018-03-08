import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import configJson from './board-config.json';
import Headset from './Headset';
import ChannelDialog from './ChannelDialog';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 20px;
`;

class BrainConfig extends Component {
    render() {
        return(
            <Container>
                <div>
                    <Headset headset={this.props.headset}/>
                </div>
                <ChannelDialog
                    open={true}
                    handleClose={() => this.setState({showDialog: false})}
                    channelConfig={this.props.channel}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        ...configJson
    };
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BrainConfig);