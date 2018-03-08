import React from 'react';
import styled from 'styled-components';
import BArea from './BArea';
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