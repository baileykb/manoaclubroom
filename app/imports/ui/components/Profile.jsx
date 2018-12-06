import React from 'react';
import { Container, Segment, List, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {
  render() {
    return (
        <Container>
          <Segment>
            <List>
              <List.Item> Name: {this.props.profile.name}</List.Item>
              <List.Item> Interests: {this.props.profile.interests}</List.Item>
              <List.Item> Major: {this.props.profile.major}</List.Item>
              <List.Item> Image: <Image src={this.props.profile.image} size='small' as='a' href={this.props.profile.image}
                                        target='_blank'/></List.Item>
            </List>
            <Link to={`/editProfile/${this.props.profile._id}`}>Edit</Link>
          </Segment>
        </Container>
    );
  }
}

/** Require a document to be passed to this component. */
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
