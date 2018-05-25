import React from "react";
import ModelCard from "./ModelCard";
import { Card } from "semantic-ui-react";

const ModelsContainer = props => {
  console.log("ModelsContainer", props);
  console.log(props.models.length);

  return (
    <Card.Group columns={5}>
      {props.models.map(m => (
        <ModelCard
          handleModelClick={props.handleModelClick}
          id={m.id}
          name={m.name}
          category={m.category}
          description={m.description}
          difficulty={m.difficulty}
          photo={m.photo}
          user_id={m.user_id}
          key={m.id}
        />
      ))}
      <ModelCard />
    </Card.Group>
  );
};

export default ModelsContainer;
