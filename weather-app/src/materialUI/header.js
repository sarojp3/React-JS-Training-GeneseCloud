import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/core/Menu';
import classes from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              <p style={{}}>Weather App</p>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
