import React from 'react';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import ContentFilter from 'material-ui/lib/svg-icons/content/filter-list';

import CircularProgress from 'material-ui/lib/circular-progress';


export default class App extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            types: [
                'All',
                'With Answers',
                'Without Answers'
            ],
            filter: null
        };
    }

    handleChange(event, filter){
        this.props.setFilter(filter);
        this.setState({
            filter
        });
    };

    render(){

        return (
            <IconMenu
                iconButtonElement={<IconButton><ContentFilter color={'white'}/></IconButton>}
                onChange={()=>this.handleChange()}
                value={this.state.types}
                multiple={false}
                closeOnItemTouchTap={true}
            >
                {this.state.types.map((type, index)=>
                    <MenuItem key={index} value={index} primaryText={type} />
                )}
            </IconMenu>
        );
    }
}