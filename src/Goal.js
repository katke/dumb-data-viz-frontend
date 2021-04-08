import React from 'react';
import ColorSelection from "./ColorSelection";
import './Goal.css';

class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValue: "unselected"
        }
    }

    updateColor(event) {
        this.setState({
            colorValue: event.target.value
        });
    }

    render() {
        return [
        <p className={"goal " + this.state.colorValue + "-selection"}>{this.props.text}</p>,
        <ColorSelection 
            onColorSelection={this.updateColor.bind(this)}
            selectionOwner={this.props.selectionOwner}/>
        ];
    }
}

export default Goal;