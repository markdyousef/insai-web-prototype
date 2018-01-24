import React, {Component} from 'react';
import styled from 'styled-components';
import ContentFeed from './Content';

const Container = styled.div`

`;

export default class extends Component {
    render() {
        return(
            <Container>
                <ContentFeed />
            </Container>
        );
    }
}
