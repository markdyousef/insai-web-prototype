import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const AreaContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    width: 400px;
`;

const BAreaContainer = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 99em;
    font-weight: 500;
`;

const BArea = ({data}) => {
    const zDepth = (data&&data.cableColor) ? 2 : 0;
    const style = {
        color: (data&&data.channelColor) ? data.channelColor.toLowerCase() : 'black',
        borderColor: (data&&data.cableColor ? data.cableColor.toLowerCase() : 'white')
    }
    return (
        <Paper zDepth={zDepth} circle>
            <BAreaContainer style={style}>
                <label>{data.areaName}</label>
            </BAreaContainer>
        </Paper>
    );
} 
export default ({headset}) => {
    const {rows} = headset;
    return (
        <AreaContainer>
            {rows.map((columns, index) => (
                <Row key={"row"+index}>
                    {columns.map(area => <BArea data={area} key={area.areaName}/>)}
                </Row>
            ))}
        </AreaContainer>
    );
}