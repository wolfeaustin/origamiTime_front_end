import React from "react";
import { Form, Input, TextArea, Button, Grid } from "semantic-ui-react";

class Step extends React.Component {
  constructor() {
    super();

    this.state = {
      img: "",
      desc: ""
    };
  }

  handleImageChange = e => {
    this.setState({
      img: e.target.value
    });
  };
  handleDescriptionChange = e => {
    this.setState({
      desc: e.target.value
    });
  };
  render() {
    return (
      <div>
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
                label="Step Image"
                placeholder="Image"
              />
              <Form.Field
                onChange={this.handleDescriptionChange}
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Instructions"
                placeholder="Enter Instructions Here..."
              />
              <Form.Group centered>
                <Form.Field
                  onClick={e =>
                    this.props.handleAddStep(this.state.img, this.state.desc)
                  }
                  id="form-button-control-public"
                  control={Button}
                  content="Add Step"
                />
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content="Finalize Model"
                />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Step;
