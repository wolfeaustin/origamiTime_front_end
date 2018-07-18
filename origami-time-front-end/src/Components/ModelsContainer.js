import React from "react";
import ModelCard from "./ModelCard";
import { Card } from "semantic-ui-react";
import "../App.css";

const ModelsContainer = props => {
  return (
    <div>
      <Card.Group itemsPerRow={5} className="models-container">
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
    </div>
  );
};

export default ModelsContainer;
