import React from "react";
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  
});

const Header = (props) => {
  const {classes} = props
  return (
    <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Posts from everywhere
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default withStyles(styles)(Header)