import React, {Component} from 'react';
import styled from 'styled-components';
import configJson from './board-config.json';
import Headset from './Headset';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 20px;
`;


export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    renderHandset = () => {

    }
    renderConfig = () => {
        const config = configJson;
        const {handset, headset} = config;
        return (
            <div>
                <Headset headset={headset} />
                {this.renderHandset(handset)}
            </div>
        );
    }
    render() {
        return(
            <Container>
                {this.renderConfig()}
            </Container>
        );
    }
}