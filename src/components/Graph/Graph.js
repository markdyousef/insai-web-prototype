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

const Graph = (props) => {
    // console.log(props);
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
                            type: 'scatter',
                            mode: 'lines+plots',
                            x: [1,2,3],
                            y: [2,6,3],
                            marker: {color: 'red'}
                        },
                        {
                            type: 'bar',
                            x: [1,2,3],
                            y: [2,5,3]
                        }
                    ]}
                    layout={{
                        width: '100%',
                        height: 240,
                        title: 'EEG'
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