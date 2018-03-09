import React from 'react';
import styled from 'styled-components';

const BAreaContainer = styled.section`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99em;
`;

const Electrode = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99em;
    font-weight: 500;
    background: #fff;
    border: 1px solid #ddd;
`;

const BArea = ({data, handleClick}) => {
    const color = (data&&data.channelColor ? data.channelColor.toLowerCase() : '#fafafa')
    return (
        <BAreaContainer style={{backgroundColor: color}}>
            <Electrode onClick={handleClick}>
                <label>{data.areaName}</label>
            </Electrode>
        </BAreaContainer>
    );
    
}

export default BArea;