import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Grid, Input } from 'semantic-ui-react';
import { Clubs } from '/imports/api/club/club';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Club from '/imports/ui/components/Club';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListClubs extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  constructor(props) {
    super(props);
    this.state = { name: '', interest: '' };
    this.handleChange = this.handleChange.bind(this);
    this.interestChange = this.interestChange.bind(this);
    this.interestChange2 = this.interestChange2.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value.substr(0, 20) });
  }

  interestChange(e) {
    this.setState({ interest: e.target.value });
  }

  interestChange2(e) {
    this.setState({ interest: e.target.value });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const list = this.props.clubs.sort((a, b) => a - b).reverse();
    const searchFilter = list.filter(
        (club) => club.name.toLowerCase().indexOf(this.state.name.toLowerCase()) !== -1,
    );
    const interestFilter = searchFilter.filter(
        (club) => club.interest.toLowerCase().indexOf(this.state.interest.toLowerCase()) !== -1,
    );
    return (
        <Container>
          <Header as="h2" textAlign="center">Browse</Header>
          <Grid centered>
            <Grid.Column width={7}>
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
                <option value='Service'/>
                <option value='Animal'/>
                <option value='Computer'/>
                <option value='Education'/>
                <option value='Women'/>
                <option value='Friendship'/>
                <option value='Video Game'/>
                <option value='Cyber Security'/>
                <option value='Martial Arts'/>
              </datalist>
            </Grid.Column>
            <Grid.Column width={4}>
              <Input fluid value={this.state.interest2} onChange={this.interestChange2}
                     list='interest2'
                     placeholder='More Interest' type="text"/>
              <datalist id='interest2'>
                <option value='Medical'/>
                <option value='Sport'/>
                <option value='Service'/>
                <option value='Animal'/>
                <option value='Computer'/>
                <option value='Education'/>
                <option value='Women'/>
                <option value='Friendship'/>
                <option value='Video Game'/>
                <option value='Cyber Security'/>
                <option value='Martial Arts'/>
              </datalist>
            </Grid.Column>
          </Grid>
          <Card.Group>
            {interestFilter.map((club, index) => <Club key={index} club ={club} />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListClubs.propTypes = {
  clubs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clubs');
  return {
    clubs: Clubs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListClubs);
