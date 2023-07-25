import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iteration: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        iteration: this.state.iteration + 1 / 3,
      });
    }, 60);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const value = this.props.value;
    const text = value.split("").map((letter, index) => {
      if (index < this.state.iteration) {
        return letter;
      }

      return letters[Math.floor(Math.random() * 26)];
    }).join("");

    return (
      <span
        onMouseOver={() => this.setState({ iteration: 0 })}
      >{text}</span>
    );
  }
}

export default MyComponent;
