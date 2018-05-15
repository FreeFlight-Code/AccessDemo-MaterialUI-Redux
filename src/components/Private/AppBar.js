import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
// import IconButton from 'material-ui/IconButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

class AppBarDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleTitleClick = ()=> {
        alert('onClick triggered on the title component');
    }



    handleMenuToggle = () => this.setState({ open: !this.state.open });

    render() {
        const styles = {
            title: {
                cursor: 'pointer',
            }
        };
        return (
            <div>
                <AppBar
                    title={<span style={styles.title}>Accurate Firestop and Insulation</span>}
                    onTitleClick={this.handleTitleClick}
                    onLeftIconButtonClick={this.handleMenuToggle}
                // iconElementRight={<FlatButton label="Save" />}
                />
                <Drawer docked={false} open={this.state.open}>
                    <MenuItem onClick={this.handleMenuToggle}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleMenuToggle}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
};

export default AppBarDrawer;