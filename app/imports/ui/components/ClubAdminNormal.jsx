import React from 'react';
import { Card, Image, Button, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ClubAdminNormal extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image size='large' src={this.props.club.image} />
            <Card.Header>
              {this.props.club.name}
            </Card.Header>
            <Card.Meta>
              {this.props.club.location}, {this.props.club.time}
            </Card.Meta>
            <Card.Content extra>
              Click me!
              <a href={`${this.props.club.website}`}><Image centered size='mini' src='/images/gift.jpg'/></a>
            </Card.Content>
            <Card.Content extra>
              <Label color='green'>{this.props.club.interest}</Label>  <Label color='red'>{this.props.club.interest2}</Label>
            </Card.Content>
            <Card.Description>
              {this.props.club.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red'>
                <Card.Content extra>
                  <Link to={`/edit/${this.props.club._id}`}>Edit</Link>
                </Card.Content>
              </Button>
            </div>
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
