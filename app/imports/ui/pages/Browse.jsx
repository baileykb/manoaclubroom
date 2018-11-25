import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Input, Grid } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import StuffItem from '/imports/ui/components/StuffItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', interest: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value.substr(0, 20) });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const searchFilter = this.props.stuffs.filter(
        (stuff) => {
          return stuff.name.toLowerCase().indexOf(this.state.name.toLowerCase()) !== -1;
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
              <Input fluid value={this.state.interest} onChange={this.handleChange}
                     list='interest'
                     placeholder='Interest' type="text"/>
              <datalist id='interest'>
                <option value='Medical'/>
                <option value='Sport'/>
                <option value='Law'/>
                <option value='Religion'/>
              </datalist>
            </Grid.Column>
          </Grid>
          <Card.Group>{searchFilter.map((stuff, index) => <StuffItem key={index}
                                                                              stuff={stuff}/>)}</Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Browse.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuffs');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Browse);
