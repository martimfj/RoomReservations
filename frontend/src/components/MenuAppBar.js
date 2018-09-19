import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Description from '@material-ui/icons/Description';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom:80,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    count_notif: 0,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };


  redProfile = () => {
    this.setState({ anchorEl: null });
    window.location.assign('/profile/1');  
};

  redMain = () => {
    this.setState({ anchorEl: null });
    window.location.assign('/main');  
  };



  singOutClick = () => {
    this.setState({ anchorEl: null });
    window.location.assign('/login');  
};

  forumClick = () => {
    this.setState({ anchorEl: null });
    window.location.assign('/forum');  
};

notifyClick = () => {
  this.setState({ anchorEl: null });
  window.location.assign('/notify');  
};

  getCountAt = async() => {
    console.log("APP")      
    let res = await fetch('/openreclamacoes', {
        method: 'GET'
    })
    res = await res.json()
    console.log(res)
    this.setState({"count_notif" : 5})
  }

  componentDidMount(){
    this.getCountAt()
  }

  render() {
    const { anchorEl} = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
  
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.redProfile}>Profile</MenuItem>
        <MenuItem onClick={this.singOutClick}>Sign Out</MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="absolute" >
          <Toolbar>
            <Typography className={classes.title} onClick = {this.redMain} variant="title" color="inherit" noWrap>
              BiZerva
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

              <IconButton color="inherit" onClick={this.notifyClick} >
                <Description/>
              </IconButton>

              <IconButton color="inherit" onClick={this.forumClick} >
                <Badge className={classes.margin} badgeContent={this.state.count_notif} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>

              
              
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
              
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
