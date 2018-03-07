import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class extends Component {
    render() {
        return(
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="markdyousef" />
                    <ToolbarSeparator />
                    <RaisedButton label="Connect" primary />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="BigQuery" />
                        <MenuItem primaryText="Pub/Sub" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}