import React from "react";
import { Card } from "semantic-ui-react";

const Filter = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.type}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default Filter;
