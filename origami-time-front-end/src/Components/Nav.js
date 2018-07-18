import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "Home"
    };
  }

  handleMenuSelection = (e, obj) => {
    this.setState({
      activeItem: obj.name
    });
  };

  render() {
    return (
      <Menu size="small">
        <Menu.Item>
          <img src="https://openclipart.org/download/93811/vliegende-vogel.svg" />
        </Menu.Item>
        <Menu.Item
          onClick={this.handleMenuSelection}
          active={this.state.activeItem === "Home"}
        >
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item
          onClick={this.handleMenuSelection}
          active={this.state.activeItem === "Sign In"}
        >
          <Link to="/signin">Sign In</Link>
        </Menu.Item>

        <Menu.Item
          onClick={this.handleMenuSelection}
          active={this.state.activeItem === "About"}
        >
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item position="right">
          <Link to="/addmodel">Add Model</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
