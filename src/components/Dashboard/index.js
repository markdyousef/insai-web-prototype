import React, {Component} from 'react';
import styled from 'styled-components';
import Graphs from '../Graphs';
import Controls from '../Controls';

const Container = styled.section`
    width: 100;
`;

export default class extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <Graphs />
                <Controls />
            </Container>
        );
    }
}