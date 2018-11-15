import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the AdminClubPage page. */
class AdminClubPage extends React.Component {
  render() {
    return (
        <div className={'ClubAdmin-Background'}>
        <Grid Container stackable centered columns={3}>

          <Grid.Column textAlign={'center'}>
          <Icon size={'huge'} name={'group'}/>
            <Header as='h1'>Sports Club</Header>
            <Header as='h3'>This club entails any, and everything sports related, whether you would like to talk about
              sports or get together a group   for intramural sports, anything is welcome!</Header>
          </Grid.Column>

          <Grid.Column textAlign={'center'}>
            <Icon size={'huge'} name={'location arrow'}/>
            <Header as='h1'>Location</Header>
            <Header as='h3'>We are currently Located in Kuyenkendall hall. Feel free to stop by even if
              you are not a part of our club!</Header>
          </Grid.Column>

          <Grid.Column textAlign={'center'}>
            <Icon size={'huge'} name={'calendar times'}/>
            <Header as='h1'>Meeting Times</Header>
            <Header as='h3'>We currently meet on Wednesdays at 4pm every week. </Header>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default AdminClubPage;
