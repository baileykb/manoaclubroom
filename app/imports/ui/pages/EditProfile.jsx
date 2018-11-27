import React from 'react';
import { Container, Form, Grid, Header, Segment } from 'semantic-ui-react';

/**
 * Signup component is similar to signin component, but we attempt to create a new user instead.
 */
export default class EditProfile extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { newName: '', newEmail: '', newPassword: '' };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission using Meteor's account mechanism. */
  handleSubmit() {
    const { newName, newEmail, newPassword } = this.state;
    this.setState({ newName: newName, newEmail: newEmail, newPassword: newPassword });
    // setUsername()
  }

  /** Display the signup form. */
  render() {
    const { newName, newEmail, newPassword } = this.state;

    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Edit your profile
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                      label="Name"
                      name="newName"
                      type="newName"
                      value={newName}
                      placeholder="Type new name here"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="newEmail"
                      type="newEmail"
                      value={newEmail}
                      placeholder="Type new email here"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="newPassword"
                      type="newPassword"
                      value={newPassword}
                      placeholder="Type new password here"
                      onChange={this.handleChange}
                  />
                  <Form.Button content="Submit"/>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
