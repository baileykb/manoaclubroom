import React from 'react';
import { Container, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class User extends React.Component {
  render() {
    return (
        <Container>
          <List>
            <List.Item>{this.props.user.name}</List.Item>
            <List.Item>{this.props.user.interests}</List.Item>
          </List>
        </Container>
    );
  }
}

/** Require a document to be passed to this component. */
User.propTypes = {
  user: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(User);
