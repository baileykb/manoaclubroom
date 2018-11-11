import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background'>
          <Grid stackable centered container columns={3}>

            <Grid.Column textAlign='center'>
              <Icon inverted size='huge' name='search'/>
              <Header as='h1' inverted>Search</Header>
              <Header as='h3' inverted>Search for specific clubs that you may have heard about. If you do not have a particular club in mind, try searching for one that is within your interest.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted size='huge' name='info circle'/>
              <Header as='h1' inverted>Information</Header>
              <Header as='h3' inverted>Descriptions of the club are shown to give interested students an overview of the club. Time and location of their meetings are listed for students wanting to join.</Header>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon inverted size='huge' name='sitemap'/>
              <Header as='h1' inverted>Club site</Header>
              <Header as='h3' inverted>Visit the website of the club to get more detailed information.</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
