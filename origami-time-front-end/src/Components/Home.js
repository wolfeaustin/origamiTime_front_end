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
      .then(data => this.setState({ models: data, currentModels: data }));
  }

  handleModelClick = id => {
    this.props.history.push(`/models/${id}`);
  };

  handleFilterClick = type => {
    let filteredModels = [];
    switch (type) {
      case "Traditional":
        filteredModels = this.state.models.filter(m => m.user_id === 1);
        break;
      case "User Models":
        filteredModels = this.state.models.filter(m => m.user_id !== 1);
        break;
      case "All Models":
        filteredModels = this.state.models;
        break;
      default:
        filteredModels = this.state.models;
        break;
    }
    this.setState({
      currentModels: filteredModels
    });
  };

  handleSearchChange(text) {
    // console.log(text);
  }

  render() {
    console.log(this.state.currentModels);
    return (
      <div>
        <FiltersContainer onClick={this.handleFilterClick} />
        <ModelsContainer
          models={this.state.currentModels}
          handleModelClick={this.handleModelClick}
        />
      </div>
    );
  }
}

export default Home;
