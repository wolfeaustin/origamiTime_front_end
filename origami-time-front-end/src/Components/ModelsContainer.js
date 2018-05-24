import React from "react";
import ModelCard from "./ModelCard";

const ModelsContainer = props => {
  console.log("ModelsContainer", props);
  return (
    <div>
      ModelsContainer
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
    </div>
  );
};

export default ModelsContainer;
