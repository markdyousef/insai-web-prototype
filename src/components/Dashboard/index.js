import React, {Component} from 'react';
import styled from 'styled-components';
import Graphs from '../Graphs';
import Controls from '../Controls';
import Config from '../Config';

const Container = styled.section`
    background: #ddd;
    display: flex;
    flex-direction: column;
`;

const View = styled.div`
    display: flex;
    padding: 5px;
`;

export default class extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <Controls />
                <View>
                    <Graphs />
                    <Config />
                </View>
            </Container>
        );
    }
}