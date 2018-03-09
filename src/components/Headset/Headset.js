import React from 'react';
import styled from 'styled-components';
import BArea from './BArea';
import ChannelDialog from './ChannelDialog';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 20px;
`;

const AreaContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    width: 600px;
`;

export const Headset = ({headset, handleClick}) => {
    const {rows} = headset;
    return (
        <AreaContainer>
            {rows.map((columns, index) => (
                <Row key={"row"+index}>
                    {columns.map(area => 
                        <BArea
                            data={area}
                            key={area.areaName}
                            handleClick={handleClick}
                        />
                    )}
                </Row>
            ))}
        </AreaContainer>
    );
}

export default (props) => {
    console.log(props)
    return(
        <Container>
            <div>
                <Headset
                    headset={props.headset}
                    handleClick={() => props.showDialog(true)}
                />
            </div>
            <ChannelDialog
                open={props.channel.displayDetail}
                handleClose={() => props.showDialog(false)}
                channelConfig={props.channel}
            />
        </Container>
    );
}