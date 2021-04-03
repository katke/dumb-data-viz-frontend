import nordstromLogo from './Nordstrom_N_logo.jpg'
import LevelGoals from './LevelGoals';
import React from 'react';
import './App.css';

// https://jsonblob.com/api/04738fae-94ac-11eb-aa1a-abdb46c07136

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: {}
    }
  }

  componentDidMount() {
    fetch("https://jsonblob.com/api/04738fae-94ac-11eb-aa1a-abdb46c07136")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("success");
          this.setState({
            isLoaded: true,
            levels: result.levels
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("Something went wrong");
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={nordstromLogo} className="App-logo" alt="logo" />
        </header>
          <LevelGoals {...this.state} className="report-leveling"></LevelGoals>
          <LevelGoals {...this.state} className="manager-leveling"></LevelGoals>
      </div>
    );
  }
  
}

export default App;
