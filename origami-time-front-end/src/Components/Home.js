import React from "react";
import FiltersContainer from "./FiltersContainer";
import ModelsContainer from "./ModelsContainer";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      models: [],
      currentModels: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/models")
      .then(r => r.json())
      .then(data => this.setState({ models: data }));
  }

  handleModelClick = id => {
    let selectedModel = this.state.models.find(m => m.id === id);
    console.log(selectedModel);
    this.props.history.push(`/models/${id}`);
    //render modelShow
  };

  handleSearchChange(text) {
    console.log(text);
  }

  render() {
    return (
      <div>
        <FiltersContainer />
        <ModelsContainer
          models={this.state.models}
          handleModelClick={this.handleModelClick}
        />
      </div>
    );
  }
}

export default Home;
