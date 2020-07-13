import React from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        contacts: {someInt: 2}
    };
  }
    
  componentDidMount() {
    // Important - to avoid CORS issues we need to either set up a proxy or have the correct CORS headers
    // In tjhis instance we have "proxy" defined in the package.json
    fetch('/test')
    .then(res => res.json())
    .then(data => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Value {this.state.contacts.someInt}.
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Header;
