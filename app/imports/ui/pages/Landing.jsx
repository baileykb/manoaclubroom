import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background'>
          <Grid stackable centered container columns={6}>

            <Grid.Column textAlign='left'>
              <Icon color=' ' size='huge' name='search'/>
              <Header as='h1' color='#006400'>Search</Header>
              <Header as='h3' color='#006400'>
                Search for specific clubs that you may have heard about.
                If you do not have a particular club in mind,
                try searching for one that is within your interest.
              </Header>

            </Grid.Column>

            <Grid.Column textAlign='center'>
            </Grid.Column>

            <Grid.Column textAlign='center'>

            </Grid.Column>

            <Grid.Column textAlign='center'>

            </Grid.Column>

            <Grid.Column textAlign='center'>

            </Grid.Column>

            <Grid.Column textAlign='center'>

            </Grid.Column>

          </Grid>
        </div>

    );
  }
}

export default Landing;
