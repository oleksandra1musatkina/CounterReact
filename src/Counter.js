import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // class Counter extends React.Component {
  //   state = {
  //     counter: 0
  //   };
  //   increment = () => {
  //     console.log("done");
  //     this.setState({
  //       counter: this.state.counter + 1
  //     });
  //   };
  //   decrement = () => {
  //     console.log("done");
  //     this.setState({
  //       counter: this.state.counter - 1
  //     });
  //   };
  //   react = () => {
  //     this.setState({
  //       counter: (this.state.counter = 0)
  //     });
  //   };

  //   render() {
  // return (
  // <div>
  /* <div>Counter {this.state.counter}</div> */

  /* <div>{counter}</div>
      <div>Counter {counter}</div> */

  /* 
        <button onClick={this.increment}>increment +</button>
        <button onClick={this.decrement}>decrement -</button>
        <button onClick={this.reset}>reset</button>
      </div>
    ); */

  // }
  return (
    <div className="body">
      <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>increment</button>
        <button onClick={() => setCounter(counter - 1)}>decrement</button>
        <button onClick={() => setCounter(0)}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
