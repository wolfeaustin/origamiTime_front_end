import React from "react";
import {
  Image,
  Grid,
  Label,
  Button,
  Card,
  Icon,
  Item
} from "semantic-ui-react";

class ModelShowPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      difficulty: "",
      steps: [],
      photo: "",
      view: "list"
    };
  }

  handleViewClick = () => {
    //not actually setting, just toggling
    this.state.view === "list"
      ? this.setState({
          view: "grid"
        })
      : this.setState({
          view: "list"
        });
    console.log(this.state.view);
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/models/${this.props.match.params.modelId}`
    )
      .then(r => r.json())
      .then(data => {
        console.log("data", data),
          this.setState({
            name: data.name,
            description: data.description,
            difficulty: data.difficulty,
            steps: data.steps,
            photo: data.photo
          });
      });
  }

  render() {
    return (
      <div>
        <br />
        <br />

        <Item.Image size="medium" src={this.state.photo} />
        <h1>{this.state.name}</h1>
        <p>Difficulty: {this.state.difficulty}</p>
        <p>{this.state.description}</p>

        <br />
        <br />

        <Button.Group>
          <Button onClick={this.handleViewClick}>List</Button>
          <Button.Or />
          <Button positive onClick={this.handleViewClick}>
            Grid
          </Button>
        </Button.Group>

        <br />
        <br />
        {this.state.view === "list" ? (
          <div>
            {this.state.steps.map(s => (
              <Item key={s.id}>
                <Item.Image src={s.photo} size="medium" />
                <Item.Description>
                  <h3>Step: {s.step_num}</h3>
                  <br />
                  {s.description}
                </Item.Description>
                <p />
                <br />
                <br />
                <br />
              </Item>
            ))}
          </div>
        ) : (
          <Card.Group itemsPerRow="3" centered>
            {this.state.steps.map(s => (
              <div>
                <Card style={{ margin: "35px" }} centered>
                  <Image size="large" src={s.photo} />
                  <Card.Content>
                    <Card.Header>{`Step: ${s.step_num}`}</Card.Header>

                    <Card.Description>{s.description}</Card.Description>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </Card.Group>
        )}
      </div>
    );
  }
}

export default ModelShowPage;
