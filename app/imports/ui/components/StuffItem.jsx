import React from 'react';
import { Card, Button, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.stuff.name}</Card.Header>
            <Card.Meta>{this.props.stuff.location}, {this.props.stuff.time}</Card.Meta>
            <Card.Description>
              {this.props.stuff.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Label color='green'>{this.props.stuff.interest}</Label>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
