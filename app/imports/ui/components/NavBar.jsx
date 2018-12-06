import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import { Clubs } from '/imports/api/club/club';
import { Profiles } from '/imports/api/profile/profile';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const interestClubs =
        this.props.profile ? (
            this.props.clubs.filter(
                (club) => this.props.profile.interests.indexOf(club.interest) !== -1,
            )) : (
            []
        );
    let unseen = interestClubs.count((club) => club.seen = true)
    const menuStyle = { marginBottom: '10px', padding: '50px', background: 'white' };
    return (
        <Menu style={menuStyle} attached="top" borderless color='black'>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header as='h1'>Manoa Club Room</Header>
          </Menu.Item>
          {this.props.currentUser ? (
              [
                <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>List of Clubs</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/interestClubs"
                           key='interestClubs'>Suggested Clubs</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>Add Clubs</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/displayProfile"
                           key='displayProfile'>Profile</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/request"
                           key='request'>Request Club</Menu.Item>,
              ]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              [
                <Menu.Item as={NavLink} activeClassName="active" exact to="/admin"
                           key='admin'>Admin</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/interests"
                           key='interests'>Interests</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/listRequest"
                           key='listRequest'>List Requests</Menu.Item>,
              ]
          ) : ''}
          {Roles.userIsInRole(Meteor.userId(), 'clubAdmin') ? (
              <Menu.Item as={NavLink} activeClassName="active" exact to="/clubAdmin"
                         key='clubAdmin'>Club Admin</Menu.Item>
          ) : ''}

          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="top right" icon={'user'}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
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
  clubs: PropTypes.array,
  profile: PropTypes.object,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
  clubs: Clubs.find({}).fetch(),
  profile: Profiles.findOne(),
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
