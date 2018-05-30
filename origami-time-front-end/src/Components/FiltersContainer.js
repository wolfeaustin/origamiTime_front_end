import React from "react";
import Filter from "./Filter";
import { Grid } from "semantic-ui-react";

const FiltersContainer = props => {
  return (
    <div>
      <Grid columns={6}>
        <Grid.Row>
          <Grid.Column>
            <Filter onClick={props.onClick} type="All Models" />
          </Grid.Column>
          <Grid.Column>
            <Filter onClick={props.onClick} type="User Models" />
          </Grid.Column>
          <Grid.Column>
            <Filter onClick={props.onClick} type="Traditional" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default FiltersContainer;
