import React from 'react';
<<<<<<< HEAD
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
=======
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
>>>>>>> issue-2-v2

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
<<<<<<< HEAD
        <Card centered>
          <Card.Content>
            <Image floated='right' size='tiny' src={this.props.stuff.image}/>
            <Card.Header>{this.props.stuff.name}</Card.Header>
            <Card.Meta>{this.props.stuff.location}</Card.Meta>
            <Card.Meta>{this.props.stuff.time}</Card.Meta>
            <Card.Description>
              {this.props.stuff.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Label color='green'>{this.props.stuff.interest}</Label>
          </Card.Content>
        </Card>
=======
        <Table.Row>
          <Table.Cell>{this.props.stuff.name}</Table.Cell>
          <Table.Cell>{this.props.stuff.quantity}</Table.Cell>
          <Table.Cell>{this.props.stuff.condition}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
>>>>>>> issue-2-v2
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
