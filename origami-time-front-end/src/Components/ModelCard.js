import React from "react";

const ModelCard = props => {
  console.log("ModelCard", props);
  return (
    <div onClick={e => props.handleModelClick(props.id)}>
      {props.name}
      <br />
      {props.description}
      <br />
      {props.category}
      <br />
      {props.difficulty}
      <br />
      {props.photo}
      <br />
      {props.user_id}
      <br />
      <br />
    </div>
  );
};

export default ModelCard;
