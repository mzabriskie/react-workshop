webpackJsonp([3],[
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
	 * As mentioned at the begining, everything in React starts with a component.
	 * Using components as the building block, we can assemble multiple
	 * components together to create more complex components, or apps.
	 *
	 * Up until now we have only created components that render native DOM elements
	 * as their content. Once we have our own custom component however, it is
	 * exactly the same to render that instead of a native element.
	 *
	 * Example:
	 *
	 *  ```
	 *  let FormField = (props) => {
	 *    return (
	 *      <div className="form-group">
	 *        <label htmlFor={props.htmlFor}>{props.label}</label>
	 *        {props.children}
	 *      </div>
	 *    );
	 *  };
	 *
	 *  let LoginForm = () => {
	 *    return (
	 *      <form role="form" className="form">
	 *        <FormField htmlFor="username" label="Username">
	 *          <input className="form-control" name="username" id="username"/>
	 *        </FormField>
	 *        <FormField htmlFor="password" label="Password">
	 *          <input className="form-control" name="password" id="password"/>
	 *        </FormField>
	 *        <button className="btn btn-primary">Submit</button>
	 *      </form>
	 *    );
	 *  };
	 *
	 *  ReactDOM.render(<LoginForm/>, container);
	 *  ```
	 *
	 * We could now potentially move `FormField` into it's own file which would
	 * allow it to be tested in isolation as well as be imported anywhere else
	 * in our application that it may be needed.
	 *
	 * Exercise:
	 *
	 *  Create a `Person` component using the following spec.
	 *
	 *    `Person`:
	 *      - Render a `div` with a `className` of `Person`
	 *      - Accept the props `name`, `title`, `avatar`, `twitter`, `github`
	 *      - Render the name and title of the person
	 *      - Render the `Avatar`
	 *      - Render links to twitter and github using `Icon`
	 *
	 *    `Avatar`:
	 *      - Render a `img` with a `className` of `Avatar`
	 *      - Accept the props `size` and `url`
	 *      - Adjust the width/height of img according to size
	 *
	 *    `Icon`:
	 *      - Render an `a` with a `className` of `Icon`
	 *      - Accept the props `href` and `type`
	 *      - Render a font-awesome icon based on `type`
	 */

	var Person = function Person(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'Person' },
	    _react2.default.createElement(Avatar, { url: props.avatar, size: 200 }),
	    _react2.default.createElement(
	      'b',
	      null,
	      props.name
	    ),
	    _react2.default.createElement(
	      'em',
	      null,
	      props.title
	    ),
	    _react2.default.createElement(
	      'ul',
	      null,
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(Icon, { href: 'https://twitter.com/' + props.twitter, type: 'twitter' })
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(Icon, { href: 'https://github.com/' + props.github, type: 'github' })
	      )
	    )
	  );
	};

	Person.propTypes = {
	  avatar: _react.PropTypes.string,
	  name: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  twitter: _react.PropTypes.string,
	  github: _react.PropTypes.string
	};

	var Avatar = function Avatar(props) {
	  return _react2.default.createElement('img', { src: props.url, className: 'Avatar', style: {
	      width: props.size,
	      height: props.size,
	      borderRadius: props.size / 2
	    } });
	};

	Avatar.defaultProps = {
	  size: 200
	};

	Avatar.propTypes = {
	  url: _react.PropTypes.string,
	  size: _react.PropTypes.number
	};

	var Icon = function Icon(props) {
	  return _react2.default.createElement(
	    'a',
	    { href: props.href, target: '_blank', className: 'Icon' },
	    _react2.default.createElement('i', { className: 'fa fa-' + props.type })
	  );
	};

	_reactDom2.default.render(_react2.default.createElement(Person, {
	  name: 'Matt Zabriskie',
	  title: 'JavaScript Nerd',
	  avatar: 'https://avatars0.githubusercontent.com/u/199035',
	  twitter: 'mzabriskie',
	  github: 'mzabriskie'
	}), container);

/***/ }
]);