import React from 'react';
import { Card, Image, Label, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Club extends React.Component {
  render() {
    return (
        <Card centered >
          <Card.Content className="bg">
            <Grid container verticalAlign="middle" >
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
            </Grid>
            <Image rounded fluid size='medium' src={this.props.club.image} />
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
