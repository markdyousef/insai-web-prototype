/* global Plotly:true */
import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory'
const Plot = createPlotlyComponent(Plotly)

export default () => {
    return (
        <Plot 
        />
    );
}