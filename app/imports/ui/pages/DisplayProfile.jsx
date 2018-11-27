import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { User } from '/imports/ui/components/User';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class DisplayProfile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
          /* <Header as="h2" textAlign="center">ID: {Meteor.userId()}</Header>
          <Header as="h2" textAlign="center">Name: {this.props.currentUserName}</Header
          <Header as="h2" textAlign="center">Email: {this.props.currentUser}</Header> */
        <Container>
          <Header>Profile</Header>
          {this.props.users.map((stuff) => <User key={stuff._id} stuff={stuff} />)}
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
DisplayProfile.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    users: Users.find({}).fetch(),
    ready: subscription.ready(),
  };
})(DisplayProfile);
