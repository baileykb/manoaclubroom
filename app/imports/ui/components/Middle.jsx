import React from 'react';
import { Container, Card } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <Container>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Club name</Card.Header>
                <Card.Description>Club description</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Club name</Card.Header>
                <Card.Description>Club description</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Club name</Card.Header>
                <Card.Description>Club description</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Club name</Card.Header>
                <Card.Description>Club description</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}
