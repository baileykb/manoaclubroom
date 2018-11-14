import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Input, Grid } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuff extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Browse</Header>
          <Grid>
            <Grid.Column width={8}>
              <Input fluid icon='search' placeholder='Search...' />
            </Grid.Column>
            <Grid.Column width={4}>
              <Input fluid placeholder='Interests...'/>
            </Grid.Column>
          </Grid>
          <Card.Group>{this.props.stuffs.map((stuff) => <StuffItem key={stuff._id} stuff={stuff}/>)}</Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuff.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStuff);
