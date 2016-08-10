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

let Person = (props) => {
  return (
    <div className="Person">
      <Avatar url={props.avatar} size={200}/>
      <b>{props.name}</b>
      <em>{props.title}</em>
      <ul>
        <li><Icon href={`https://twitter.com/${props.twitter}`} type="twitter"/></li>
        <li><Icon href={`https://github.com/${props.github}`} type="github"/></li>
      </ul>
    </div>
  );
}

Person.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string
};

let Avatar = (props) => {
  return (
    <img src={props.url} className="Avatar" style={{
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2
    }}/>
  );
}

Avatar.defaultProps = {
  size: 200
};

Avatar.propTypes = {
  url: PropTypes.string,
  size: PropTypes.number
};

let Icon = (props) => {
  return (
    <a href={props.href} target="_blank" className="Icon">
      <i className={`fa fa-${props.type}`}/>
    </a>
  );
};

ReactDOM.render(
  <Person
    name="Matt Zabriskie"
    title="JavaScript Nerd"
    avatar="https://avatars0.githubusercontent.com/u/199035"
    twitter="mzabriskie"
    github="mzabriskie"
  />, container
);
