webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var container = document.getElementById('container');

	/**
	 * React components are styled very similarly to how you would natively style
	 * an HTML element. You have two options: CSS classes and inline styles. These
	 * styles are passed into a component by using props as we just learned about.
	 *
	 * Example:
	 *
	 *  ```
	 *  ReactDOM.render(<input className="form-control"/>, container);
	 *  ```
	 *
	 * You may have noticed that the prop name is `className` as opposed to `class`.
	 * This is to avoid conflicts with the reserved word `class` in JavaScript.
	 * Using the `className` property will apply the given CSS class to the element.
	 *
	 * As mentioned you can also use inline styles. This approach allows you to set
	 * styles directly to an element without using CSS classes, but rather by
	 * defining them as an object.
	 *
	 * Example:
	 *
	 *  ```
	 *  ReactDOM.render(
	 *    <input style={{
	 *      border: '1px solid #000',
	 *      fontSize: 18,
	 *      width: 150
	 *    }} />, container
	 *  );
	 *  ```
	 *
	 * When using inline styles CSS property names that contain a hyphen shohuld be
	 * converted to camel case (e.g., font-size -> fontSize). Also by default any
	 * property that has a numeric value will be assumed to have a unit of `px`.
	 *
	 * Exercise:
	 *
	 *  Create a `Box` component that renders a `div` and accepts a `size` and
	 *  `style` property. Some CSS classes are provided:
	 *
	 *    - Box: provides basic styling for the component
	 *    - Box--large: renders a large box
	 *    - Box--medium: renders a medium box
	 *    - Box--small: renders a small box
	 *
	 *  If the `size` is `large` the component should use the class `Box--large`.
	 *  It should also use whatever inline styles are provided.
	 */

	var Box = function Box(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'Box Box--' + props.size, style: props.style },
	    props.children
	  );
	};

	Box.propTypes = {
	  size: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};

	_reactDom2.default.render(_react2.default.createElement(Box, { size: 'large', style: { backgroundColor: '#e8117f' } }), container);

/***/ }
]);