import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('container');

/**
 * React components accept properties which allow us to pass data into a
 * component from the outside. This is very similar to using attributes
 * with native HTML elements.
 *
 * Example:
 *
 *  ```
 *  ReactDOM.render(
 *    <OrderDetail orderNumber="12345"/>
 *    document.getElementById('container')
 *  );
 *  ```
 *
 * By passing in properties, the component can be used to hide away render
 * logic that may otherwise be repeated over and over, but still allows for
 * passing in information unique to a given instance. This is exactly the same
 * as declaring a function to calculate how old a person is, for example,and
 * passing in their birth date as an argument.
 *
 * In order to use props we have to define our component a little differently
 * than we have done in the previous example.
 *
 *  ```
 *  let Hello = (props) => {
 *    return <div>Hello {props.children}</div>;
 *  };
 *
 *  ReactDOM.render(<Hello>World</Hello>, container);
 *  ```
 *
 * This example uses a reserved prop name `children` which will render whatever
 * is passed in as the body of the component. This is similar to using
 * "transclude" with an Angular directive.
 *
 * You also likely noticed the curly braces around `props.children`. This tells
 * JSX to evaluate what's between the braces as literal JavaScript.
 *
 * You may also accept any props you need for your component to render.
 *
 *  ```
 *  let OrderDetail = (props) => {
 *    return (
 *      <div>
 *        <div>Order Number: {props.order.number}</div>
 *        <div>Quantity: {props.order.quantity</div>
 *        <div>Order Total: {props.order.quantity * props.product.price}</div>
 *        <div>Product: {props.product.name}</div>
 *        <div><img src={props.product.imageUrl}/></div>
 *      </div>
 *    );
 *  };
 *
 *  ReactDOM.render(
 *    <OrderDetail
 *      order={{
 *        number: 12345,
 *        quantity: 3
 *      }}
 *      product={{
 *        name: 'Nerf CS-18 N-Strike Elite Rapidstrike',
 *        price: 34.95,
 *        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71D%2Brf9kXuL._SL1500_.jpg'
 *      }}
 *    />, container
 *  );
 *  ```
 *
 * Exercise:
 *
 *  Create a component that takes a user's first and last name and renders
 *  "Hello Jane Doe!" (assuming first name is Jane and last name is Doe).
 */

// TODO Your solution here

/**
 * Often you will want to validate that properties that are provided to your
 * component. This could be anything from verifying the data type of a prop,
 * or could be indicating that a prop is required. React provides a mechanism
 * for specifying the validation of props as well as providing default values
 * in the event that a prop isn't required and no value is provided. This is
 * done using `propTypes` and `defaultProps`.
 *
 * Example:
 *  
 *  ```
 *  let OrderDetail = (props) => {
 *    return (
 *      <div>
 *        <div>Order Number: {props.order.number}</div>
 *        <div>Quantity: {props.order.quantity</div>
 *        <div>Order Total: {props.order.quantity * props.product.price}</div>
 *        <div>Product: {props.product.name}</div>
 *        <div><img src={props.product.imageUrl}/></div>
 *      </div>
 *    );
 *  };
 *
 *  OrderDetail.defaultProps = {
 *    order: {},
 *    product: {}
 *  };
 *
 *  OrderDetail.propTypes = {
 *    order: PropTypes.object,
 *    product: PropTypes.object
 *  };
 *
 *  ReactDom.render(<OrderDetail/>, container);
 *  ```
 *
 * See https://facebook.github.io/react/docs/reusable-components.html#prop-validation
 *
 * Exercise:
 *
 *  Create a component that takes a user object as a prop, provides a default
 *  value, validates that the prop is an object, and renders
 *  "Hello firstName lastName!".
 */

// TODO Your solution here
