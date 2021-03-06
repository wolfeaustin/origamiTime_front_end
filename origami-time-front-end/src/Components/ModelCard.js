import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

//User(user_id) needs to go somewhere

const ModelCard = props => {
  return (
    <Card
      centered="true"
      color="blue"
      size="tiny"
      onClick={e => props.handleModelClick(props.id)}
      style={{ width: "250px", margin: "45px" }}
    >
      <Image size="small" src={props.photo} centered />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.category}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {props.difficulty}
        </a>
      </Card.Content>
    </Card>
  );
};

export default ModelCard;
