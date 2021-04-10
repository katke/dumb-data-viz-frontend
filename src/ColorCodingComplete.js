import React from 'react';
import ResultComparison from './ResultComparison';

class ColorCodingComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false,
      results: {}
    }
  }

  componentDidMount() {
    fetch("https://jsonblob.com/api/0a80ceba-9a40-11eb-a8aa-2df9e5152ea6")
    .then(res => res.json())
    .then(
      (result) => {
        console.log("success");
        this.setState({
          dataFetched: true,
          results: result
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

  compareAndRenderResults(selections) {
    return selections.map((goal) => {
        return <ResultComparison 
            key={goal.id}
            isMatching={goal.manager === goal.report}
            managerColor={goal.manager}
            reportColor={goal.report}
            text={goal.value} />
    });
  }

  render() {
      if (this.state.dataFetched) {
        const reportName = this.state.results.report;
        const managerName = this.state.results.manager;
        return [
            <h3 className="grid-col-3">{reportName}</h3>,
            <h3 className="grid-col-3">{managerName}</h3>,
            this.compareAndRenderResults(this.state.results.selections)
        ];
      }
      return null;
  }
}

export default ColorCodingComplete;