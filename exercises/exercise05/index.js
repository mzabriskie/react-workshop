import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('container');

/**
 * Where props allow for data to be passed into a component from the outside,
 * state allows a component to keep track of it's own data needed for rendering.
 *
 * In order for a component to use state we need to use a more complex way of
 * creating a component.
 *
 * Example:
 *
 *  ```
 *  class ClickCounter extends Component {
 *    constructor(props) {
 *      super(props);
 *
 *      this.state = {
 *        clicks: 0
 *      };
 *
 *      this.handleButtonClick = this.handleButtonClick.bind(this);
 *    }
 *
 *    handleButtonClick() {
 *      this.setState({
 *        clicks: this.state.clicks + 1
 *      });
 *    }
 *
 *    render() {
 *      return (
 *        <div>
 *          <button onClick={this.handleButtonClick}>Click Me!</button>
 *          <div>Clicked {this.state.clicks} times</div>
 *        </div>
 *      );
 *    }
 *  }
 *  ```
 *
 * Calling `setState` will queue the internal state for the component to be
 * updated. Once it has changed `render` will be called and the component will
 * once again be rendered with the changes. Only this point of the render tree
 * down will be affected.
 *
 * There are a handful of lifecycle methods that come into play when dealing
 * with state, such as `componentWillUpdate`, `componentDidUpdate`, etc.
 *
 * See https://facebook.github.io/react/docs/component-specs.html
 *
 * Exercise:
 *
 *  Create a `StopWatch` component that has a Start/Stop button and a Clear
 *  button. Pressing Start will start a timer and the lapsed time in
 *  milliseconds should be displayed above the buttons. Once started the
 *  Start button should change to Stop. Clicking Stop will stop the timer
 *  but lapsed time will be preserved. Clicking Start again will resume
 *  the timer from where it left off. Clicking Clear will stop the timer
 *  if it's running and reset the lapsed time to 0.
 */

class StopWatch extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      running: false,
      timer: null,
      lapse: 0,
      now: 0
    };

    this.handleRunClick = this.handleRunClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleRunClick() {
    if (this.state.running) {
      this.stop();
    } else {
      this.start();
    }
  }

  handleClearClick() {
    this.stop();
    this.setState({
      lapse: 0,
      now: 0
    });
  }

  start() {
    let timer = setInterval(() => {
      this.setState({
        lapse: Date.now() - this.state.now
      });
    });

    this.setState({
      running: true,
      timer,
      now: Date.now() - this.state.lapse
    });
  }

  stop() {
    clearInterval(this.state.timer);

    this.setState({
      running: false,
      timer: null
    });
  }

  render() {
    return (
      <div>
        <label>{this.state.lapse}ms</label>
        <button onClick={this.handleRunClick}>{this.state.running ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleClearClick}>Clear</button>
      </div>
    );
  }
}

ReactDOM.render(<StopWatch/>, container);

