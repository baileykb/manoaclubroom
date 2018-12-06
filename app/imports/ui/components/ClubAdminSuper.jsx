import React from 'react';
import { Card, Image, Button, Icon, Label, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Clubs } from '/imports/api/club/club';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ClubAdminSuper extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  onClick() {
    Clubs.remove(this.props.club._id, this.deleteCallback);
  }

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
              Click gift to visit club website!!!
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
              <Button basic color='green'>
                <Card.Content extra>
                  <Link to={`/edit/${this.props.club._id}`}>Edit</Link>
                </Card.Content>
              </Button>
              <Button basic color='red' onClick={this.onClick}>Delete</Button>
            </div>
          </Card.Content>
        </Card>

    );
  }
}

/** Require a document to be passed to this component. */
ClubAdminSuper.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ClubAdminSuper);
