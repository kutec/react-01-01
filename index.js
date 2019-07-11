import React, { Component } from 'react';
import { render } from 'react-dom';
import Abc from './Hello';
import KU from './First';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        { /**
          <Abc name={this.state.name} />

         */}
        <KU name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
