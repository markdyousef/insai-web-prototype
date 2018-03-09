/*global Plotly:true */
import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory'
import styled from 'styled-components';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'; 
import FlatButton from 'material-ui/FlatButton';
const Container = styled.section`
    height: 500px;
    width: 100%;
`;

const Plot = createPlotlyComponent(Plotly)

const Graph = ({ channelData }) => {
    return (
       <Container>
            <Card>
                <CardHeader
                    title="Study session"
                    subtitle="MedNeuro, Coursera, Modafinil"
                />
                <Plot
                    data={[
                        {
                            mode: 'lines',
                            y: [2,6,3]
                        },
                        {
                            mode: 'lines',
                            y: [2,3,4]
                        }
                    ]}
                    layout={{
                        width: '100%',
                        height: 240
                    }}
                />
                <CardTitle title="Cyton data" />
                <CardText>
                    * Anotate
                    * Label / Classify
                    * Compare
                </CardText>
                <CardActions>
                    <FlatButton label="label"/>
                    <FlatButton label="compare" />
                </CardActions>
            </Card>
       </Container>
    );
}

export default Graph;