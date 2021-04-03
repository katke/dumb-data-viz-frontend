import React from 'react';
import ColorSelection from "./ColorSelection";

class LevelGoals extends React.Component {
    createLevelItems() {
        let checkpoints = [];
        for (const [key, value] of Object.entries(this.props.levels)) {
            checkpoints.push(<h2 id={"level-" + key}>Level {key}:</h2>);
            value.forEach(item => {
                checkpoints.push(
                <p id={key + "-" + item.id}>
                    {item.value}
                    <ColorSelection selectionOwner={this.props.selectionOwner}/>
                </p>);
            })
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
  