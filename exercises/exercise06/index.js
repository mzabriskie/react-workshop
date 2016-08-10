import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const container = document.getElementById('container');

/**
 * React does not provide a module for sending HTTP requests. To do this we
 * need to bring in a third-party library. For this exercies we will use a
 * libary called `axios`.
 *
 * It is best not to fetch data from a server in the `render` method. As we
 * saw in the last exercise any change to the state of a component can cause
 * a re-render of the component. This will likely happen more often than we
 * want. It is best to use another lifecycle method `componentWillMount` to
 * make these requests. This method will be called once before the component
 * is inserted into the document, regardless of how many times `render` is
 * called.
 *
 * Example:
 *
 *  ```
 *  class UserProfile extends Component {
 *    constructor(props) {
 *      super(props);
 *
 *      this.state = {
 *        user: {}
 *      };
 *    }
 *
 *    componentWillMount() {
 *      axios(`/users/${this.props.id}`)
 *        .then((response) => {
 *          this.setState({
 *            user: response.data
 *          });
 *        });
 *    }
 *
 *    render() {
 *      let user = this.state.user;
 *      return (
 *        <div>
 *          <div>First name: ${user.firstName}</div>
 *          <div>Last name: ${user.lastName}</div>
 *          <div>Email address: ${user.emailAddress</div>
 *        </div>
 *      );
 *    }
 *  }
 *
 *  UserProfile.propTypes = {
 *    id: PropTypes.number.isRequired
 *  };
 *  ```
 *
 * See https://facebook.github.io/react/docs/component-specs.html
 *
 * Exercise:
 *
 *  Create a `RepoList` component that lists all the GitHub repos for a user.
 *  Allow the user to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */

class RepoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
  }

  componentWillMount() {
    axios(`https://api.github.com/users/${this.props.user}/repos?per_page=250`)
      .then((response) => {
        this.setState({
          repos: response.data
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.repos.map((repo) => {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    );
  }
}

RepoList.propTypes = {
  user: PropTypes.string
};

ReactDOM.render(<RepoList user="mzabriskie"/>, container);
