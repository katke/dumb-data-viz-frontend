import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false
    }
  }

  componentDidMount() {
    // fetch("https://jsonblob.com/api/04738fae-94ac-11eb-aa1a-abdb46c07136")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log("success");
    //       this.setState({
    //         dataFetched: true
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       console.log("Something went wrong");
    //       console.log(error);
    //       this.setState({
    //         dataFetched: true,
    //         error
    //       });
    //     }
    //   )
  }

  render() {
    return (
      <div className="app">
        Hello!
      </div>
    );
  }
  
}

export default App;
