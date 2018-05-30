import React from "react";
import { Card } from "semantic-ui-react";

const Filter = props => {
  return (
    <Card
      onClick={e => props.onClick(props.type)}
      style={{ width: "200px", margin: "35px" }}
    >
      <Card.Content>
        <Card.Header>{props.type}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default Filter;
