import React from 'react';
import { Grid, Loader, Header, Segment, TextArea, Image } from 'semantic-ui-react';
import { Clubs, ClubSchema } from '/imports/api/club/club';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders the Page for editing a single document. */
class EditClub extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { name, location, time, interest, image, description, _id } = data;
    Clubs.update(_id, { $set: { name, location, time, interest, image, description } }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered columns={2}>
          <Grid.Column >
            <Header as="h2" textAlign="center"> Club Details and Recent Activity</Header>
            <AutoForm schema={ClubSchema} onSubmit={this.submit} model={this.props.doc}>
              <Segment>
                <TextField name='image'/>
                <div className="ui image">
                  <Image src={this.props.doc.image} size='small' as='a' href={this.props.doc.image}
                         target='_blank'/>
                </div>
                <Header as="h4">Recent activities</Header>
                <TextArea placeholder='Please Enter the recent activities' />
                <Header as="h4">Note</Header>
                <TextArea placeholder='Please Enter anything you want to note' />
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>

          <Grid.Column >
            <Header as="h2" textAlign="center">Basic Information</Header>
            <AutoForm schema={ClubSchema} onSubmit={this.submit} model={this.props.doc}>
              <Segment>
                <TextField name='name'/>
                <TextField name='location'/>
                <TextField name='time'/>
                <TextField name='interest'/>
                <LongTextField name='description'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditClub.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Clubs');
  return {
    doc: Clubs.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditClub);
