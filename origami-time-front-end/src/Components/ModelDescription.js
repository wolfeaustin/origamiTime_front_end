import React from "react";
import { Form, TextArea, Button, Grid, Label, Image } from "semantic-ui-react";

class ModelDescription extends React.Component {
  constructor() {
    super();

    this.state = {
      image: "",
      description: "",
      imagePath: ""
    };
  }

  handleImageChange = e => {
    this.setState({
      image: e.target.value
    });
  };

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleImageUpload = e => {
    debugger;
    this.setState({
      imagePath: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Image src={this.state.imagePath} />
        <Label as="label" basic htmlFor="upload">
          <Button
            icon="upload"
            label={{
              basic: true,
              content: "Select file(s)"
            }}
            labelPosition="right"
          />
          <input
            hidden
            id="upload"
            multiple
            type="file"
            onChange={this.handleImageUpload}
          />
        </Label>

        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form>
              <Form.Input
                onChange={this.handleImageChange}
                id="form-textarea-control-opinion"
                label="Model Image"
                placeholder="Image"
              />
              <Form.Field
                onChange={this.handleDescriptionChange}
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Model Description"
                placeholder="Description"
              />
              <Form.Field
                onClick={e =>
                  this.props.onClick(this.state.image, this.state.description)
                }
                id="form-button-control-public"
                control={Button}
                content="Add Model Info"
              />
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ModelDescription;
