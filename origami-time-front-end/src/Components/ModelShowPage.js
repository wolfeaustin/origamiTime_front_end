import React from "react";

class ModelShowPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      difficulty: "",
      steps: []
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/models/${this.props.match.params.modelId}`
    )
      .then(r => r.json())
      .then(data => {
        console.log(data),
          this.setState({
            name: data.name,
            description: data.description,
            difficulty: data.difficulty,
            steps: data.steps
          });
      });
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.difficulty}</p>
        <p>{this.state.description}</p>
        {this.state.steps.map(s => (
          <div key={s.id}>
            <img src={s.photo} />
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ModelShowPage;
