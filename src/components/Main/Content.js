import React, {Component} from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

// Data Source Class

class DataSource {
    constructor(url) {
        this.url = url
    }
    addChangeListener(handleChange) {
        console.log(handleChange)
    }
    removeChangeListener(handleChange) {
        console.log(handleChange)
    }
    getData() {
        return fetch(this.url)
            .then(res => res.json())
            .then(body => body)
            .catch(err => console.log(err))
    }
}

const ds = new DataSource('https://refind.com/MarkDYousef.json')

// Refind API data wrapper
function refindDataWrapper(WrappedComponent, selectData) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            }
        }
        componentDidMount() {
            ds.getData().then(data => this.setState({data}))
        }
        componentWillUnmount() {
        }
        render() {
            return(<WrappedComponent data={this.state.data} {...this.props}/>)
        }
    }
}


const Container = styled.section`
    width: 600px;
    /* overflow: auto; */
    padding: 5px;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const ContentContainer = styled.div`
    height: 140px;
    padding: 20px;
    h1 {
        font-size: 14px;
    }
    h3 {
        font-size: 12px;
        color: rgb(40, 200, 200)
    }
`;


const ListItem = ({data}) => {
    console.log(data)
    return (
        <Paper style={{ margin: '5px'}}zDepth={3}>
            <ContentContainer>
            <h1>{data.title}</h1>
            <h3>Host: {data.host}</h3>
            <p>Created at: {data.created_at}</p>
            <p>Top tags: {data.top_tags.map(text => text)}</p>
            </ContentContainer>
        </Paper>
    );
}

class ContentFeed extends Component {
    renderFeed = (dataList) => {
        return (
            <List>
                {dataList.map((obj, idx) => <ListItem data={obj} key={idx}/>)}
            </List>
        );
    }
    render() {
        const { data } = this.props;
        return (
            <Container>
                {this.renderFeed(data)}
            </Container>
        );
    }
}

export default refindDataWrapper(ContentFeed, () => null)