import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSignIn = e => {
    console.log(this.state);
  };

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <div className="login-form">
        {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="blue" textAlign="center">
              <Image
                verticalAlign="middle"
                src="https://openclipart.org/download/93811/vliegende-vogel.svg"
              />{" "}
              Sign-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  onChange={this.handleUsernameChange}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  onChange={this.handlePasswordChange}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Button
                  onClick={this.handleSignIn}
                  color="blue"
                  fluid
                  size="large"
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
