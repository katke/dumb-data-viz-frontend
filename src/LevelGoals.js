import React from 'react';
import Goal from './Goal';

class LevelGoals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: "unselected"
        }
    }

    getSelectionColorValue(selectedColor) {
        this.setState({
            colorSelection: selectedColor
        });
    }

    createLevelItems() {
        let goals = [];
        for (const [key, value] of Object.entries(this.props.levels)) {
            goals.push(<h2 key={"level-" + key}>Level {key}:</h2>);
            goals.push(value.map(item => {
                return <Goal key={key + "-" + item.id} text={item.value}/>;
            }));
        }
        return goals;
    }

    levelingSubmission(event) {
        event.preventDefault();
        console.log("form submitted");
    }

    render() {
        if (this.props.dataFetched) {
            return (
                <form id="colorCodingSubmission" onSubmit={this.levelingSubmission.bind(this)}
                className={"leveling " + this.props.className}>
                    {this.createLevelItems()}
                    <button type="submit" value="Submit">Submit</button>
                </form>
                );
            } else {
                return null;
            }
        
        }

}
  
  export default LevelGoals;
  