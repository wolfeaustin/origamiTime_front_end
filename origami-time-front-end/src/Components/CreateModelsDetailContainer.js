import React from "react";

const CreateModelsDetailContainer = props => {
  console.log(props);
  return (
    <div>
      <h2>{`Model Info:`}</h2>

      {props.modelInfo.image}
      {props.modelInfo.description}
      <h2>Steps:</h2>
      {props.steps.map((m, idx) => (
        <p>{`Step ${idx + 1}: ${m.image} ${m.description}`}</p>
      ))}
    </div>
  );
};

export default CreateModelsDetailContainer;
