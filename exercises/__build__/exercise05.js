webpackJsonp([4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var container = document.getElementById('container');

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

	var StopWatch = function (_Component) {
	  _inherits(StopWatch, _Component);

	  function StopWatch() {
	    _classCallCheck(this, StopWatch);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StopWatch).apply(this, arguments));

	    _this.state = {
	      running: false,
	      timer: null,
	      lapse: 0,
	      now: 0
	    };

	    _this.handleRunClick = _this.handleRunClick.bind(_this);
	    _this.handleClearClick = _this.handleClearClick.bind(_this);
	    return _this;
	  }

	  _createClass(StopWatch, [{
	    key: 'handleRunClick',
	    value: function handleRunClick() {
	      if (this.state.running) {
	        this.stop();
	      } else {
	        this.start();
	      }
	    }
	  }, {
	    key: 'handleClearClick',
	    value: function handleClearClick() {
	      this.stop();
	      this.setState({
	        lapse: 0,
	        now: 0
	      });
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      var _this2 = this;

	      var timer = setInterval(function () {
	        _this2.setState({
	          lapse: Date.now() - _this2.state.now
	        });
	      });

	      this.setState({
	        running: true,
	        timer: timer,
	        now: Date.now() - this.state.lapse
	      });
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      clearInterval(this.state.timer);

	      this.setState({
	        running: false,
	        timer: null
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'label',
	          null,
	          this.state.lapse,
	          'ms'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleRunClick },
	          this.state.running ? 'Stop' : 'Start'
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleClearClick },
	          'Clear'
	        )
	      );
	    }
	  }]);

	  return StopWatch;
	}(_react.Component);

	_reactDom2.default.render(_react2.default.createElement(StopWatch, null), container);

/***/ }
]);