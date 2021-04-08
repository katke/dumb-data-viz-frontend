import nordstromLogo from './Nordstrom_N_logo.jpg'
import LevelGoals from './LevelGoals';
import React from 'react';
import './App.css';

// https://jsonblob.com/api/04738fae-94ac-11eb-aa1a-abdb46c07136

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false,
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
            dataFetched: true,
            levels: result.levels
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("Something went wrong");
          console.log(error);
          this.setState({
            dataFetched: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="App grid">
        <header className="App-header grid-col-6">
          <img src={nordstromLogo} className="App-logo" alt="logo" />
        </header>
        <section>
          <LevelGoals {...this.state} selectionOwner="report" className="report-leveling grid-col-3"></LevelGoals>
          <LevelGoals {...this.state} selectionOwner="manager" className="manager-leveling grid-col-3"></LevelGoals>
        </section>
      </div>
    );
  }
  
}

export default App;
