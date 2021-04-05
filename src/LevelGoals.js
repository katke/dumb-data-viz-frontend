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
        let checkpoints = [];
        for (const [key, value] of Object.entries(this.props.levels)) {
            checkpoints.push(<h2 key={"level-" + key}>Level {key}:</h2>);
            value.forEach(item => {
                checkpoints.push(
                <Goal key={key + "-" + item.id}
                    text={item.value}/>);
            });
        }
        return checkpoints;
    }

    render() {
        if (this.props.dataFetched) {
            return (
                <div className={"leveling " + this.props.className}>
                    {this.createLevelItems()}
                </div>
                );
            } else {
                return null;
            }
        
        }

}
  
  export default LevelGoals;
  