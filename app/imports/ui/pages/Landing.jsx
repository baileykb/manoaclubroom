import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background'>
          <Grid stackable centered container columns={3}>

            <Grid.Column textAlign='center'>
              <Icon color='green' size='huge' name='search'/>
              <Header as='h1' color='green'>Search</Header>
              <Header as='h3' color='green'>Search for specific clubs that you may have heard about. If you do not have a
                particular club in mind, try searching for one that is within your interest.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon color='green' size='huge' name='info circle'/>
              <Header as='h1' color='green'>Information</Header>
              <Header as='h3' color='green'>Descriptions of the club are shown to give interested students an overview of
                the club. Time and location of their meetings are listed for students wanting to join.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon color='green' size='huge' name='sitemap'/>
              <Header as='h1' color='green'>Club site</Header>
              <Header as='h3' color='green'>Visit the website of the club to get more detailed information.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
