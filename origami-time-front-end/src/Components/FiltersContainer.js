import React from "react";
import Filter from "./Filter";
import { Grid } from "semantic-ui-react";

const FiltersContainer = props => {
  return (
    <Grid>
      <Grid.Row columns={4}>
        <Grid.Column>
          <Filter type="All Models" />
        </Grid.Column>
        <Grid.Column>
          <Filter type="User Models" />
        </Grid.Column>
        <Grid.Column>
          <Filter type="Traditional" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FiltersContainer;
