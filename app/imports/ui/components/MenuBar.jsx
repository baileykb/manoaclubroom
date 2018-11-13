import React from 'react';
import { Menu, Dropdown, Header } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless>
          <Menu.Item>
            <Header as={'h1'}>ManoaClubRoom</Header>
          </Menu.Item>
          <Dropdown item text={'User'} position= 'right'>
          <Dropdown.Menu>
            <Dropdown.Item>Add User</Dropdown.Item>
            <Dropdown.Item>Remove User</Dropdown.Item>
            <Dropdown.Item>Edit Club Settings</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </Menu>
    );
  }
}
