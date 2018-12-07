import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Clubs, Requests } from '/imports/api/club/club';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Request extends React.Component {

  constructor(props) {
    super(props);
    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
  }

  /** On submit, insert the data. */
  accept() {
    Clubs.insert(this.props.request, this.decline);
    const owner = Meteor.users.findOne({ username: this.props.request.owner });
    if (owner) {
      Roles.addUsersToRoles(owner._id, 'clubAdmin');
    }
  }

  decline() {
    Requests.remove(this.props.request._id);
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image size='big' src={this.props.request.image}/>
            <Card.Header>
              {this.props.request.name}
            </Card.Header>
            <Card.Meta>
              {this.props.request.location}
            </Card.Meta>
            <Card.Description>
              {this.props.request.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.request.owner}
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green' onClick={this.accept}>
                Approve
              </Button>
              <Button basic color='red' onClick={this.decline}>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>

    );
  }
}

/** Require a document to be passed to this component. */
Request.propTypes = {
  request: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Request);
