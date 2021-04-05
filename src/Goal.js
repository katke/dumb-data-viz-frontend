import React from 'react';
import ColorSelection from "./ColorSelection";

class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValue: "unselected"
        }
    }

    updateColor(event) {
        this.setState({
            colorValue: event.target.newColor
        });
    }

    render() {
        return [
        <p className={"goal " + this.state.colorValue + "-select"}>{this.props.text}</p>,
        <ColorSelection 
            onColorSelection={this.updateColor}
            selectionOwner={this.props.selectionOwner}/>
        ];
    }
}

export default Goal;