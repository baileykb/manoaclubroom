import React from 'react';
import { Grid, List } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <Grid container columns="two">
          <Grid.Column>
            <List>
              <List.Item>Add a club</List.Item>
              <List.Item/>
              <List.Item>A</List.Item>
              <List.Item>Club 1</List.Item>
              <List.Item>Club 2</List.Item>
              <List.Item>Club 3</List.Item>
              <List.Item/>
              <List.Item>B</List.Item>
              <List.Item>Club 1</List.Item>
              <List.Item>Club 2</List.Item>
              <List.Item>Club 3</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <List>
              <List.Item/>
              <List.Item/>
              <List.Item/>
              <List.Item/>
              <List.Item/>
              <List.Item>Edit</List.Item>
              <List.Item>Edit</List.Item>
              <List.Item>Edit</List.Item>
              <List.Item/>
              <List.Item/>
              <List.Item/>
              <List.Item/>
              <List.Item>Edit</List.Item>
              <List.Item>Edit</List.Item>
              <List.Item>Edit</List.Item>
            </List>
          </Grid.Column>
        </Grid>
    );
  }
}
