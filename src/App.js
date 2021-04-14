import nordstromLogo from './Nordstrom_N_logo.jpg'
import LevelGoals from './LevelGoals';
import React from 'react';
import ColorCodingComplete from './ColorCodingComplete';
import './App.css';

// https://jsonblob.com/api/04738fae-94ac-11eb-aa1a-abdb46c07136 in progress endpoint
// https://jsonblob.com/api/0a80ceba-9a40-11eb-a8aa-2df9e5152ea6 completed endpoint

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false,
      items: {},
      colorCodingCompleted: false
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

  renderColorCodingCompleteView() {
    return <ColorCodingComplete {...this.state} />
  }

  renderColorCodingInProgressView() {
    return (
        <LevelGoals {...this.state} className="grid-col-6"/>
    );
  }

  render() {
    return (
      <div className="App grid">
        <header className="App-header grid-col-6">
          <img src={nordstromLogo} className="App-logo" alt="logo" />
        </header>
        <section>
          <h4>Color Coding Exercise</h4>
          {this.state.colorCodingCompleted ? this.renderColorCodingCompleteView() : this.renderColorCodingInProgressView()}
        </section>
      </div>
    );
  }
  
}

export default App;
