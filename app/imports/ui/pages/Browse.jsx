import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Input, Grid } from 'semantic-ui-react';
import { Club } from '/imports/api/club/club';
import Clubs from '/imports/ui/components/Clubs';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', interest: '' };
    this.handleChange = this.handleChange.bind(this);
    this.interestChange = this.interestChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value.substr(0, 20) });
  }

  interestChange(e) {
    this.setState({ interest: e.target.value });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const list = this.props.clubs.sort((a, b) => a - b).reverse();
    const searchFilter = list.filter(
        (club) => {
          return club.name.toLowerCase().indexOf(this.state.name.toLowerCase()) !== -1;
        },
    );
    const interestFilter = searchFilter.filter(
        (club) => {
          return club.interest.toLowerCase().indexOf(this.state.interest.toLowerCase()) !== -1;
        },
    );
    return (
        <Container>
          <Header as="h2" textAlign="center">Browse</Header>
          <Grid>
            <Grid.Column width={8}>
              <Input fluid value={this.state.name} onChange={this.handleChange}
                     icon='search'
                     iconPosition='left'
                     placeholder='Search...' type="text"/>
            </Grid.Column>
            <Grid.Column width={4}>
              <Input fluid value={this.state.interest} onChange={this.interestChange}
                     list='interest'
                     placeholder='Interest' type="text"/>
              <datalist id='interest'>
                <option value='Medical'/>
                <option value='Sport'/>
                <option value='Animal'/>
                <option value='Music'/>
                <option value='Art'/>
                <option value='SCI-Fi'/>
              </datalist>
            </Grid.Column>
          </Grid>
          <Card.Group>{interestFilter.map((club, index) => <Clubs key={index}
                                                                              club={club}/>)}</Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Browse.propTypes = {
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
})(Browse);
