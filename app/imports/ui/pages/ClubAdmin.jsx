import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Club } from '/imports/api/club/club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ClubAdminItem from '/imports/ui/components/ClubAdminItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ClubAdmin extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }
  /** Render the page once subscriptions have been received. */

  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">My Clubs</Header>
          <Card.Group>
            {this.props.clubs.map((club, index) => <ClubAdminItem key = {index} club={club}/>)}
          </Card.Group>
        </Container>
    );
  }
}
/** Require an array of Stuff documents in the props. */
ClubAdmin.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Club');
  return {
    clubs: Club.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ClubAdmin);
