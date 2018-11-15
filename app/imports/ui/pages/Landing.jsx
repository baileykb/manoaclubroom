import React from 'react';
<<<<<<< HEAD
import { Grid, Icon, Header } from 'semantic-ui-react';
=======
import { Grid, Image } from 'semantic-ui-react';
>>>>>>> issue-3

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
<<<<<<< HEAD
        <div className='landing-background'>
          <Grid stackable centered container columns={6} >

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
=======
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={4}>
            <Image size='small' circular src="/images/meteor-logo.png"/>
          </Grid.Column>

          <Grid.Column width={8}>
            <h1>Welcome to this template</h1>
            <p>Now get to work and modify this app!</p>
          </Grid.Column>

        </Grid>
>>>>>>> issue-3
    );
  }
}

export default Landing;
