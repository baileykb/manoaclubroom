import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Menu.Item>Manoa Club Room</Menu.Item>
          <Menu.Item position="right"><Icon name="user circle outline"/></Menu.Item>
          <Menu.Item>Admin</Menu.Item>
        </Menu>
    );
  }
}
