import React, { Component } from "react";

//  define class
class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; //  initialize state value
  }

  //    Write function that changes state value
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //    return html
  render() {
    return (
      <div style={{ background: "lightpink" }}>
        <h2>Example of classCounter</h2>
        <button onClick={this.incrementCount}>
          No.of times you clicked me : {this.state.count}
        </button>
      </div>
    );
  }
}
export default ClassCounter;
