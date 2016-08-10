import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Everything in React starts with a component. A component can be created by
 * using `React.createElement`. The result of this can then be rendered using
 * `ReactDOM.render`.
 *
 * Example:
 *
 *  ```
 *  ReactDOM.render(
 *    React.createElement('div', null, 'This is my component'),
 *    document.getElementById('container')
 *  );
 *  ```
 *
 * This is similar to the following code in JavaScript:
 *
 *  ```
 *  let component = document.createElement('div');
 *  let container = document.getElementById('container');
 *
 *  component.innerHTML = 'This is my component';
 *  container.innerHTML = '';
 *
 *  container.appendChild(component);
 *  ```
 *
 * API documentation:
 *
 *  `React.createElement` creates a `ReactElement` and takes the following arguments:
 *    - type: This can be an HTML tag name (e.g., 'div', 'span', etc), or a `ReactClass`
 *    - props: This is an object defining the properties for the element
 *    - children: This is the inner content of the element, which can be a string of text, or `ReactElement`
 *
 *  `ReactDOM.render` will render an element to the DOM and takes two arguments:
 *    - element: This is the `ReactElement` to be rendered.
 *    - container: This is the DOM element to render to.
 *
 * Exercise:
 *
 *  Create a `ReactElement` that uses a `div` as it's element and renders the
 *  text "Hello World".
 */

// TODO Your solution here

/**
 * React offers a markup extension to make building declarative UIs more
 * familiar to those of us coming from an HTML background. This extension is
 * called JSX. This is completely optional when using React and requires a
 * transpiler like babel + babel-preset-react to run in the browser. This is
 * an acceptable trade off as you are likely already using babel +
 * babel-preset-es2015 to transpile your ES6 syntax to work in older browsers.
 *
 * Let's look at an example of JSX:
 *
 *  ```
 *  ReactDOM.render(<div>This is my component</div>, document.getElementById('container'));
 *  ```
 *
 * I know what you're thinking: "Why is there HTML in my JavaScript?!". This is
 * a typical initial reaction. Remember it's optional to use JSX, though once
 * you get past the initial gag reflex, it will grow on you and you'll enjoy
 * the flavor :).
 *
 * It's important to note that this produces exactly what you see in the first
 * example once it has been transpiled.
 *
 * Exercise:
 *
 *  Refactor your previous solution to use JSX.
 */

// TODO Your solution here
