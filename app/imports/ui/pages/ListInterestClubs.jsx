import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Profiles } from '/imports/api/profile/profile';
import { Clubs } from '/imports/api/club/club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Club from '/imports/ui/components/Club';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListInterestClubs extends React.Component {
  render() {
    return (this.props.ready1 && this.props.ready2) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const interestClubs =
      this.props.profile ? (
          this.props.clubs.filter(
          (club) => this.props.profile.interests.indexOf(club.interest) !== -1,
          )) : (
          []
        );
    return (
        <Container>
          <Header as="h2" textAlign="center">Interest Clubs</Header>
          <Card.Group>
            {interestClubs.map((club, index) => <Club key={index} club ={club} />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListInterestClubs.propTypes = {
  clubs: PropTypes.array.isRequired,
  profile: PropTypes.object,
  ready1: PropTypes.bool.isRequired,
  ready2: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const clubSubscription = Meteor.subscribe('Clubs');
  const profileSubscription = Meteor.subscribe('Profiles');
  return {
    clubs: Clubs.find({}).fetch(),
    ready1: clubSubscription.ready(),
    profile: Profiles.findOne(),
    ready2: profileSubscription.ready(),
  };
})(ListInterestClubs);
