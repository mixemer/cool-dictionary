import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLogged, changeAccountType } from '../../actions/account-actions';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class LoggedInMenu extends Component {
  constructor(props){
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.removeAccountType = this.removeAccountType.bind(this);
  }
  logOutUser = (data) => {
    this.props.logOutUser(data);
  }
  removeAccountType = () => {
    this.props.removeAccountType('');
  }
  handleSignOut = () => {
    this.removeAccountType();
    this.logOutUser(false);
    localStorage.removeItem('api_token');
  }

  render(){
    return(
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem onClick={this.handleSignOut} primaryText="Sign out" />
      </IconMenu>
    )
  }
};

const mapDispatchToProps = {
  logOutUser: changeLogged,
  removeAccountType: changeAccountType
};

export default connect(null, mapDispatchToProps)(LoggedInMenu);
