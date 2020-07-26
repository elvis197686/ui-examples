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

// A similar pattern uses Render Callbacks. However this is more of a simple containment pattern, with the component that does the rendering
// using the class that has the shared display logic.

// The recommended approach for re-use is now to use Hooks, which means not using classes!
// Hooks like useState and useEffect are functions that are called in certain limited circumstances,
// which allows us to "hook" in to React's behaviour and perform e.g. side effects.
// According to the React docs, "Hooks are a way to reuse stateful logic, not state itself".
// Hooks make it easier to reuse logic because there can be any number of them in a single component,
// so instead of a lifecycle function doing say an API call and updating some state, we can declare 2 useEffect hooks.
// e.g. here is a component that changed the document title and makes an API call when the DOM is updated:
// function FriendStatusWithCounter(props) {
//  const [count, setCount] = useState(0);
//  useEffect(() => {
//    document.title = `You clicked ${count} times`;
//  });
//  const [isOnline, setIsOnline] = useState(null);
//  useEffect(() => {
//    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//    return () => {
//      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//    };
//  });
//  function handleStatusChange(status) {
//    setIsOnline(status.isOnline);
//  }
// ...
// Hooks have rules that make sense when you consider what they do:
//  - Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
//  - Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.
// You can also write your own hooks, which is seen as an alternative to HOC and Render callbacks.
// The below example creates a hook (it has to start with "use") that handles changes to state on subscription
// and will unsubscribe when the component unmounts.
// import React, { useState, useEffect } from 'react';
// function useFriendStatus(friendID) {
//  const [isOnline, setIsOnline] = useState(null);
//  function handleStatusChange(status) {
//    setIsOnline(status.isOnline);
//  }
//  useEffect(() => {
//    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
//    return () => {
//      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
//    };
//  });
//  return isOnline;
// }
// ..and it is used by the component here...
// function FriendListItem(props) {
//  const isOnline = useFriendStatus(props.friend.id);
//  return (
//    <li style={{ color: isOnline ? 'green' : 'black' }}>
//      {props.friend.name}
//    </li>
//  );
// }
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

    // State is a tricky subject as for a UI of any significant size, reuse becomes important.
    // This is why Redux (and before that Flux) came in to being.
    // Redux is a single store of state, which is used by React components via dispatch of actions and state update notifications.
    // The Redux documentation recommends use of Presentational and Container components - Containers being like HOC that
    // link Redux dispatches and updates to the React components. Container components should not be written - 
    // they are a HOC inferred by the connect() function, which ties the dispatch and update methods to the presentations component, e.g.:
    // const MyContainerComponent = connect(mapStateToProps, mapDispatchToProps)(MyPresentationalComponent).
    // The use of actions is interesting because it effectively uses the command pattern, i.e.
    // it invokes an update by data not function - which includes the action to be done and the related data.
    // This action, when dispatched to Redux, has to pass through a reducer which calculates some new state (not all).
    // Given this, it makes sense that the reducer is expected to be a pure function.
    // Note that there is a contradiction in the documentation of Redux and React in that Redux recommends Presentational and Container components,
    // but the literature it cites for this decision states that hooks are a better solution?!
    // Redux also offers advanced data store functionality, like being able to specify derived data that will get calculated on update.
    // See the documentation on Memoized Selectors and the "reselect" library for details on how to do this.
    // As a summary, though, you define a function that takes the original data and returns the new data,
    // then call that (when using React) from mapStateToProps(). This reduces the amount of computation required on a state change.

    // Ultimately, though, Redux does not solve a major issue with Javascript and modern UIs in general: Design Visibility.
    // The trouble is that it is not clear what the intended design of the system is from the code.
    // There are 2 aspects to the design I am referring to here: What is shown on any one screen, and what actions can be done on that screen.
    // Regarding what is shown, React does a pretty good job at describing, albeit at a high level, what is shown because of it's hierarchical XML-style JSX.
    // But where the data comes from (i.e. is it stored in a session?) - and how it might be related to other data on the same or other screens - isn't.
    // Furthermore, the actions available on any one screen are completely hidden from anyone who isn't familiar with the code.
    // Worse still, side effects that are invoked by those actions are hidden deep within the code.
    // As an example, take a look at any example Redux app on the internet - can you point to a single place which defines the design of the store?
    // Or can you easily tell someone who isn't familiar with React/Redux which actions will make a server call?
    // The answer to both those is "no", which is a big barrier to implementing a robust, maintainable UI.
    // The ideal solution is to have a well-defined, isolated set of components that describes this basic system information - a bit like a set of APIs for the UI!
    // These components would make it possible for non-UI people (architects, product managers, etc) to understand what is expected to be shown on screen, when it would be shown,
    // how it was all related, what actions were available and what side effects those actions would have, including changes to what is shown.
    // Sometimes the best way to show how it works is to use it, and therefore providing such isolated components would be overkill,
    // but - as with any software development - it doesn't take long for software written like that to become too complex,
    // making it too difficult to understand what the intended design is.
    // At this point the only way to keep it maintainable and working well is to define these isolated components.
    return (
      <Dashboard />
    );
  }
}

export default App;
