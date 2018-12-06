import React from 'react';
import { List, Image } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <hr />
            <List>
              <List.Item href='https://github.com/manoaclubroom' > <Image size='tiny' src='/images/tree.jpg'/> </List.Item>
                <List.Item href='https://github.com/manoaclubroom' > Created by EBJK team</List.Item>

            </List>
          </div>
        </footer>
    );
  }
}

export default Footer;
