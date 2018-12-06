import React from 'react';
import { Card, Image, Label, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  constructor(props) {
    super(props);
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleClick = this.handleClick.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleClick() {
    this.props.club.seen = !this.props.club.seen;
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image size='big' src={this.props.club.image}/>
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
            <Label as='a' tag>{this.props.club.interest}</Label>
          </Card.Content>
          <Card.Content extra>
            <Checkbox label='Seen' checked={this.props.club.seen} onClick={this.props.club.handleClick}/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Club.propTypes = {
  club: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Club);
