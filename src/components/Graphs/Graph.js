/*global Plotly:true */
import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory'
import styled from 'styled-components';

const Container = styled.section`
    height: 500px;
    width: 500px;
    background: #fafafa;
`;

const Plot = createPlotlyComponent(Plotly)

const Graph = (props) => {
    console.log(props);
    return (
        <Container>
            {/* <Plot
                data={[
                    {
                        type: 'graph',
                        mode: 'lines',
                        x: props.channelData
                    }
                ]}
            /> */}
        </Container>
    );
}

export default Graph;