import React from 'react';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Grid, Segment, Header, Image, TextArea } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class AddClub extends React.Component {
  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, location, time, interest, image, description } = data;
    const owner = Meteor.user().username;
    Clubs.insert({ name, location, time, interest, image, description, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={ClubSchema} onSubmit={this.submit}>
              <Grid container centered columns={2}>
                <Grid.Column>
                  <Header as="h2" textAlign="center">Club Basic Info</Header>
              <Segment>
                <TextField name='name'/>
                <TextField name='location'/>
                <TextField name='time'/>
                <TextField name='interest'/>
                <TextField name='image'/>
              </Segment>
                </Grid.Column>

                <Grid.Column>
                  <Header as="h2" textAlign="center">Additional Info</Header>
                  <Segment>
                    <LongTextField name='description'/>
                    <Header as="h4">Note</Header>
                    <TextArea placeholder='Please Enter anything you want to note' />
                    <SubmitField value='Submit'/>
                    <ErrorsField/>
                    <HiddenField name='owner' value='fakeuser@foo.com'/>
                  </Segment>
                </Grid.Column>
              </Grid>
            </AutoForm>
    );
  }
}

export default AddClub;
