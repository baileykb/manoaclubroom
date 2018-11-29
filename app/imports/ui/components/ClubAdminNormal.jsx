import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ClubAdminNormal extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image size='big' src={this.props.club.image} />
            <Card.Header>
              {this.props.club.name}
            </Card.Header>
            <Card.Meta>
              {this.props.club.location}
            </Card.Meta>
            <Card.Description>
              {this.props.club.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red'>
                Submit!!!!!
              </Button>
            </div>
            <Card.Content extra>
              <Link to={`/edit/${this.props.club._id}`}>Edit</Link>
            </Card.Content>
          </Card.Content>
        </Card>

    );
  }
}

/** Require a document to be passed to this component. */
ClubAdminNormal.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ClubAdminNormal);
