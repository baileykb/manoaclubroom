import React from 'react';
import { Card, Label, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ClubAdminItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image size="mini" floated="right" src={this.props.club.image}></Image>
            <Card.Header>{this.props.club.name}</Card.Header>
            <Card.Meta>{this.props.club.location}, {this.props.club.time}</Card.Meta>
            <Card.Description>
              {this.props.club.description}
            </Card.Description>
            <Card.Content extra>
              <a href={`${this.props.club.website}`}><Icon name='globe'/></a>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>
            <Label color='green'>{this.props.club.interest}</Label>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.club._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ClubAdminItem.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ClubAdminItem);
