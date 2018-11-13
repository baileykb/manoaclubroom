import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class Mid extends React.Component {
  render() {
    return (
        <Container>
          <Header as={'h1'}>ClubName</Header>
          <Header as={'h2'}>Meeting Times</Header>
          <Header as={'h2'}>Location</Header>
          <Header as={'h2'}>Description</Header>
          <Header as={'h2'}>Website</Header>
        </Container>
    );
  }
}
