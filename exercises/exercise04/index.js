import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('container');

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

// TODO Your solution here
