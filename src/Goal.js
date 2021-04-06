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
            colorValue: event.target.value
        });
    }

    render() {
        return [
        <p style={{"color": this.state.colorValue}} className={"goal " + this.state.colorValue + "-selection"}>{this.props.text}</p>,
        <ColorSelection 
            onColorSelection={this.updateColor.bind(this)}
            selectionOwner={this.props.selectionOwner}/>
        ];
    }
}

export default Goal;