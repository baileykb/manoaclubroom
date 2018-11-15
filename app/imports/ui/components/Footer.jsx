import React from 'react';
<<<<<<< HEAD
import { Menu } from 'semantic-ui-react';
=======
>>>>>>> issue-2-v2

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
<<<<<<< HEAD
    const divStyle = { };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container" inverted>
=======
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
>>>>>>> issue-2-v2
            <hr />
              Department of Information and Computer Sciences <br />
              University of Hawaii<br />
              Honolulu, HI 96822
          </div>
        </footer>
    );
  }
}

export default Footer;
