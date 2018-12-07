import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', padding: '30px', background: 'white' };
    return (
        <Menu style={menuStyle} attached="top" borderless color='black'>
          <Menu.Item as={NavLink} activeClassName="" position='left' exact to="/">
            <Image size='mini' src='/images/santa.jpg'/>
            <Header as='h1'>Manoa Club Room</Header>
          </Menu.Item>
          {this.props.currentUser ? (
              [
                <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>
                  <Image size='mini' src='/images/gift.jpg'/>List of Clubs
                </Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/listInterestClubs" key='listInterestClubs'>
                  <Image size='mini' src='/images/gift.jpg'/>Suggested Clubs
                </Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/displayProfile"
                           key='displayProfile'>
                  <Image size='mini' src='/images/kids.jpg'/>
                  Profile</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/request"
                           key='request'> <Image size='mini' src='/images/penguin.jpg'/>Request Club</Menu.Item>,
              ]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              [
                <Menu.Item as={NavLink} activeClassName="active" exact to="/admin"
                           key='admin'> <Image size='mini' src='/images/snowman.jpg'/>
                  Admin</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/interests"
                           key='interests'> <Image size='mini' src='/images/christ_shit.png'/>
                  Interests</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/listRequest"
                           key='listRequest'> <Image size='mini' src='/images/deer.jpg'/>
                  Approve Request</Menu.Item>,
              ]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'clubAdmin') ? (
              <Menu.Item as={NavLink} activeClassName="active" exact to="/clubAdmin"
                         key='clubAdmin'> <Image size='mini' src='/images/christ_shit.png'/>
                Club Admin</Menu.Item>
          ) : ''}

          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="right" icon={'chess queen'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="chess bishop" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="chess" text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
