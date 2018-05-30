import React from "react";
import ModelDescription from "./ModelDescription";
import CreateModelsDetailContainer from "./CreateModelsDetailContainer";
import Step from "./Step";
import { Card } from "semantic-ui-react";

const instructions =
  "Continue to add steps until the model is completed.  Start off by adding a photo and a brief description that will represent the model." +
  "Each step also requires a photo and description.  When completed, click the FINISHED! button at the bottom of the page";

class ModelsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      modelInfo: {},
      steps: []
    };
  }

  handleAddStep = (img, desc) => {
    this.setState({
      steps: [...this.state.steps, { image: img, description: desc }]
    });
  };

  handleInitialSetUp = (img, desc) => {
    this.setState({
      modelInfo: { image: img, description: desc }
    });
  };
  render() {
    return (
      <div>
        <br />
        {instructions}
        <br />
        <br />

        <CreateModelsDetailContainer
          modelInfo={this.state.modelInfo}
          steps={this.state.steps}
        />
        <br />
        <br />
        {this.state.modelInfo.image ? (
          <Step handleAddStep={this.handleAddStep} />
        ) : (
          <ModelDescription onClick={this.handleInitialSetUp} />
        )}
      </div>
    );
  }
}

export default ModelsContainer;
