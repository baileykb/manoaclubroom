import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Button } from 'semantic-ui-react';
import { Interests } from '/imports/api/interest/interest';
import Interest from '/imports/ui/components/Interest';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListInterests extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Interests</Header>
          <Table celled>
            <Table.Body>
              {this.props.interests.map((interest) => <Interest key={interest._id} interest={interest} />)}
            </Table.Body>
          </Table>
          <Link to="/addInterest"><Button>Add</Button></Link>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListInterests.propTypes = {
  interests: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('InterestsAdmin');
  return {
    interests: Interests.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListInterests);
