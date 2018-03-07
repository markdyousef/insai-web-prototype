import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false})
    render() {
        return(
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={open => this.setState({open})}
            >
                <MenuItem onClick={this.handleClose}>1</MenuItem>
                <MenuItem onClick={this.handleClose}>2</MenuItem>
            </Drawer>
        );
    }
}