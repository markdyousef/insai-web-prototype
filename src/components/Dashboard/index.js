import React, {Component} from 'react';
import styled from 'styled-components';
import Graph from '../Graph';
import Controls from '../Controls';
import Headset from '../Headset';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const View = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    max-width: 1600px;
    width: 100%;
`;

export default class extends Component {
    render() {
        return (
            <Container>
                <Controls />
                <View>
                    {/* <Graph /> */}
                    <Headset />
                </View>
            </Container>
        );
    }
}