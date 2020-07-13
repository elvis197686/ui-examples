import React from 'react';

// Imports are more modern than requires (they were introduced by ES2015)
// Imports with brackets allow webpack (which bundles the app) to do code splitting i.e. load code when required, e.g. 
//  import("./math").then(math => {
//    console.log(math.add(16, 26));
//  }); 
import Dashboard from './Dashboard';

import './App.css';

// We are using ES6 classes.
// Without ES6 support, we need to declare a variable with a render function, e.g.:
// function App() {
//  return ( [HTML here] ) }

// If we have some complicated logic that components want to reuse, we can use what React call a "Higher Order Component" (HOC).
// A HOC is very similar to a framework or library class - it provides common logic and calls out to the specific component as neccesary.
// The best practices of writing common code apply here, e.g. don't include references to child components.
// There are some gotcha's with using HOCs in React though - see https://reactjs.org/docs/higher-order-components.html for details.
class App extends React.Component {
  render() {
    // Access props in the render function using this.props, e.g.
    // <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
    // State requires (usually) an assignment in the constructor, and is accessed using this.state
    // constructor(props) {
    //   super(props);
    //   this.state = {date: new Date()}; }
    // <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    // Props can be passed to child components:
    //   <FormattedDate date={this.props.date} />
    // ..and accessed using "{this.props...}", e.g. <h2> Date: {this.props.date} </h2>
    // State is only assigned on construction, but can be updated by any function - USING setState only!
    // e.g. updating some state on load (noting that this only updates part of the state):
    //  componentDidMount() {
    //    fetchPosts().then(response => {
    //    this.setState({
    //      posts: response.posts
    //    });
    //  });
    // If you want to do something on a state update, then you can by overriding the setState function:
    // this.setState(function(state, props) {
    //   return {
    //     counter: state.counter + props.increment
    //   };
    // });
    return (
      <Dashboard />
    );
  }
}

export default App;
