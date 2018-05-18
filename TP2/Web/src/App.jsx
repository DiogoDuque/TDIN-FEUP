import React, { Component } from 'react';
import TicketsNavbar from './components/TicketsNavbar';
import AskQuestion from './components/AskQuestion';
import SolverView from './components/SolverView';
import Register from './components/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.state = {
      page: 'AskQuestion',
    }
  }

  changePage(key) {
    if (key === this.state.page)
      return;

    this.setState({
      page: key,
    });
  }

  render() {
    return (
      <div>
        <TicketsNavbar changePage={this.changePage} />
        {this.state.page === 'AskQuestion' &&
          <AskQuestion />}
        {this.state.page === 'SolverView' &&
          <SolverView/>}
        {this.state.page === 'Register' &&
          <Register/>}
      </div>
    );
  }
}

export default App;
