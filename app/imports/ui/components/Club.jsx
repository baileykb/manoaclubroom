import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
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
