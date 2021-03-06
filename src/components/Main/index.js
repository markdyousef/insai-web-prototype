import React, {Component} from 'react';
import styled from 'styled-components';
import Toolbar from './Toolbar';
import Drawer from './Drawer';

const Container = styled.div`

`;

export default class extends Component {
    render() {
        return(
            <Container>
                <Toolbar />
                <Drawer />
                {this.props.children}
            </Container>
        );
    }
}
