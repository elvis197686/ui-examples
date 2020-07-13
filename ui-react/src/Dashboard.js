import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

class Dashboard extends React.Component {
  state = {
    open: false,
  };

  // The arrow "=>"is an ES6 operator that allows the method to be accessed using "this"
  // ..otherwise you have to bind the function to the object (probably in the constructor)
  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="App-Dashboard">
        <button className="App-Dashboard-collapse-button" onClick={this.toggleDrawer}>
          Open/close
        </button>
        <div className={"App-Dashboard-collapse" + (this.state.open ? ' in' : '')}>
          <Header />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // PropTypes provides input validation (at runtime, in development mode)
  classes: PropTypes.object.isRequired,
};

export default Dashboard;
